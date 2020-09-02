// cz-customizable配置文件

const subjectLimit = 500

module.exports = {
  types: [
    { // 新功能
      value: 'feat',
      name: 'feat:     A new feature' 
    },
    { // 修补bug
      value: 'fix',
      name: 'fix:      A bug fix' 
    },
    { // 更新
      value: 'upgrade',
      name: 'upgrade:  A new version' 
    },
    { // 文档
      value: 'docs',
      name: 'docs:     Documentation only changes' 
    },
    { // 样式
      value: 'style',
      name:
        'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)',
    },
    { // 重构，既不新增功能也不修改bug的代码变动
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    { // 增加测试
      value: 'test',
      name: 'test:     Adding missing tests'
    },
    { // 构建过程或辅助工具的变动
      value: 'chore',
      name:
        'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation',
    },
    { // 回退，还原
      value: 'revert',
      name: 'revert:   Revert to a commit'
    },
  ],

  // 定义scope选项值
  scopes: [],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: `Write a SHORT, IMPERATIVE tense description of the change(limit: ${subjectLimit}):\n`,
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: [],

  // limit subject length
  subjectLimit: subjectLimit,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};