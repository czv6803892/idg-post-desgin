const {
  version
} = require('../package.json')
const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path')

let versionType
let logPath
let versionOut

const jsonPath = path.resolve(__dirname, '../package.json')
if (process.env.CHANGELOG_TYPE) {
  versionType = process.env.CHANGELOG_TYPE
  generateChangelog()
} else {
  /**
   * 获取用户选项
   **/
  inquirer.prompt([
    {
      name : 'versionType',
      type : 'list',
      message : 'Please choose a publish version type',
      default : 'patch',
      choices : [
        {
          name : 'patch',
          value : 'patch',
          short : 'patch',
        },
        {
          name : 'minor',
          value : 'minor',
          short  : 'minor',
        },
        {
          name : "major",
          value : 'major',
          short : 'major'
        },
      ],
    }
  ]).then(ans=>{
    versionType = ans.versionType
    generateChangelog()
  })
}


/**
 * 生成日志
 **/
function generateChangelog() {
  fetch()
  const logDir = path.resolve(__dirname, '../') // changelog所在目录
  
  const [major, minor, patch] = version.split('.')
  const versions = {
    major: `${Number(major) + 1}.${0}.${0}`, // 主版本号
    minor: `${major}.${Number(minor) + 1}.${0}`, // 次版本号
    patch: `${major}.${minor}.${Number(patch) + 1}` // 修补版本号
  }
  
  versionOut = versions[versionType] // 最终生成的md文件版本号
  logPath = `${logDir}/CHANGELOG.md`
  replaceVersion()

  generate({
    preset: 'angular',
    outfile: logPath,
    infile: logPath,
    outputUnreleased: 1,
    releaseCount: 1,
    append: true
  }, () => { commit(versionOut) })
}

/**
 * 替换package.json的版本号
 **/
function replaceVersion () {
  let log = ''
  try {
    log = fs.readFileSync(logPath, { encoding: 'utf-8'})
  } catch(e) {
    fs.writeFileSync(logPath,  log, { encoding: 'utf-8'})
  }
  console.log('replace start', log)
  fs.writeFileSync(logPath, log, { encoding: 'utf-8' })
  const pkgJson = fs.readFileSync(jsonPath, { encoding: 'utf-8' })
  const replacedPkgJson = pkgJson.replace(`"version": "${version}"`, `"version": "${versionOut}"`)
  fs.writeFileSync(jsonPath, replacedPkgJson, { encoding: 'utf-8' })
}

/**
 * 获取远程仓库
 **/
function fetch () {
  console.log('fetch origin tags')
  const cp = require('child_process')
  cp.execSync('git fetch')
  cp.execSync('git pull origin master')
  console.log('fetch success')
}

/**
 * 提交并push到master分支
 **/
function commit (version) {
  console.log('commit changelog to master')
  const cp = require('child_process')
  cp.execSync('git fetch')
  cp.execSync('git pull origin master')
  cp.execSync('git add .')
  cp.execSync(`git commit -a -m 'upgrade: ${version}'`)
  cp.execSync(`git tag ${version}`)
  cp.execSync(`git push origin master --tags`)
  console.log('push success')
}

/**
 * 生成
 */
function generate(flags, cb) {
  var addStream = require('add-stream');
  var conventionalChangelog = require('conventional-changelog');
  var fs = require('fs');
  var tempfile = require('tempfile');
  var _ = require('lodash');
  var resolve = require('path').resolve;

  var config;


  var infile = flags.infile;
  var outfile = flags.outfile;
  var sameFile = flags.sameFile;
  var append = flags.append;
  var releaseCount = flags.releaseCount;

  if (infile && infile === outfile) {
    sameFile = true;
  } else if (sameFile) {
    if (infile) {
      outfile = infile;
    } else {
      console.error('infile must be provided if same-file flag presents.');
      process.exit(1);
    }
  }

  var options = _.omit({
    preset: flags.preset,
    pkg: {
      path: flags.pkg
    },
    append: append,
    releaseCount: releaseCount,
    outputUnreleased: flags.outputUnreleased
  }, _.isUndefined);

  if (flags.verbose) {
    options.debug = console.info.bind(console);
    options.warn = console.warn.bind(console);
  }

  var templateContext;

  var outStream;

  try {
    if (flags.context) {
      templateContext = require(resolve(process.cwd(), flags.context));
    }

    if (flags.config) {
      config = require(resolve(process.cwd(), flags.config));
    } else {
      config = {};
    }
  } catch (err) {
    console.error('Failed to get file. ' + err);
    process.exit(1);
  }

  var changelogStream = conventionalChangelog(options, templateContext, config.gitRawCommitsOpts, config.parserOpts, config.writerOpts)
    .on('error', function (err) {
      if (flags.verbose) {
        console.error(err.stack);
      } else {
        console.error(err.toString());
      }
      process.exit(1);
    });

  function noInputFile() {
    if (outfile) {
      outStream = fs.createWriteStream(outfile);
    } else {
      outStream = process.stdout;
    }

    console.log('pipe stream')
    changelogStream
      .pipe(outStream)
      .on('finish', function () {
        cb()
        console.log('finish pipe')
      });
  }

  if (infile && releaseCount !== 0) {
    var readStream = fs.createReadStream(infile)
      .on('error', function () {
        if (flags.verbose) {
          console.warn('infile does not exist.');
        }

        if (sameFile) {
          noInputFile();
        }
      });

    if (sameFile) {
      console.log('sameFile')
      if (options.append) {
        changelogStream
          .pipe(fs.createWriteStream(outfile, {
            flags: 'a'
          }))
          .on('finish', function () {
            cb()
            console.log('finish pipe')
          });;
      } else {
        var tmp = tempfile();

        changelogStream
          .pipe(addStream(readStream))
          .pipe(fs.createWriteStream(tmp))
          .on('finish', function () {
            fs.createReadStream(tmp)
              .pipe(fs.createWriteStream(outfile));
          });
      }
    } else {
      if (outfile) {
        outStream = fs.createWriteStream(outfile);
      } else {
        outStream = process.stdout;
      }

      var stream;

      if (options.append) {
        stream = readStream
          .pipe(addStream(changelogStream));
      } else {
        stream = changelogStream
          .pipe(addStream(readStream));
      }

      stream
        .pipe(outStream);
    }
  } else {
    noInputFile();
  }
}