/**
 * @author: YouJie
 */

const fs = require('fs')
const dayjs = require('dayjs')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const { version } = require('./package.json')

function hasElementVariables() {
  let importPath = ''
  try {
    fs.accessSync('./src/assets/scss/element-variables.scss')
    importPath = '@import "@/assets/scss/element-variables.scss"'
  } catch {
    return importPath
  }
  return importPath
}

module.exports = {
  assetsDir: 'static',
  productionSourceMap: process.env.PRODUCTION_SOURCE_MAP === 'true',
  publicPath:
    process.env.NODE_ENV === 'development' ? '/' : process.env.PUBLIC_PATH,

  devServer: {
    port: 9527,
    hotOnly: true
  },

  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'development') {
      // 开启 Gzip 压缩
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      )
    }

    // 设置发版时间
    process.env.VUE_APP_RELEASE_TIME = dayjs().format('YYYY-MM-DD HH:mm:ss')
    // 设置版本号
    process.env.VUE_APP_VERSION = `v${version}`
  },

  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true)
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `
          ${hasElementVariables()};
					@import "@/assets/scss/variables.scss";
					@import "@/assets/scss/mixins.scss";
        `
      }
    }
  }
}
