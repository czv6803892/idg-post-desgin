const apiMocker = require('@idg/mocker')
const path = require('path')
const globby = require('globby')
const { transpileDependencies, chainWebpack } = require('@idg/cli-config')

const devConfig = {
  chainWebpack,
  transpileDependencies,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    before (app) {
      apiMocker(app,
        globby.sync(['**/__mocks__/index.js']).map(filePath => {
          return path.resolve(process.cwd(), filePath)
        })
      )
    }
  }
}

const prodConfig = {
  chainWebpack,
  transpileDependencies,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
}

module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig
