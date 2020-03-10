/**
 * @author: YouJie
 */

const fs = require('fs')
const dayjs = require('dayjs')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const { version } = require('./package.json')
const isDevelopment = process.env.NODE_ENV === 'development'

// 使用环境变量设置端口号 export port=3000 yarn serve
// 或者 yarn serve --port=3000 或 yarn serve --port 3000
const port = process.env.port || ~~process.env.DEV_SERVER_PORT

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
  publicPath: isDevelopment ? '/' : process.env.PUBLIC_PATH,
  outputDir: process.env.OUTPUT_DIR,
  assetsDir: process.env.ASSETS_DIR,
  productionSourceMap: process.env.PRODUCTION_SOURCE_MAP === 'true',
  lintOnSave: !isDevelopment,

  devServer: {
    port,
    open: process.env.DEV_SERVER_OPEN === 'true',
    hotOnly: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },

  configureWebpack: config => {
    if (!isDevelopment && process.env.GZIP_ON === 'true') {
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

  css: {
    loaderOptions: {
      sass: {
        prependData: `
          ${hasElementVariables()};
					@import "@/assets/scss/variables.scss";
					@import "@/assets/scss/mixins.scss";
					@import "@/assets/scss/function.scss";
        `
      }
    }
  }
}
