/**
 * @author: YouJie
 * @date: 2019-10-23 16:58:22
 */

const getUiFramework = require('../ui/index')

module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    scripts: {
      serve: 'vue-cli-service serve',
      plop: 'plop',
      fix: "eslint --fix --ext .js,.vue src",
      clean: "yarn cache clean",
      'build:stage': 'vue-cli-service build --mode staging --modern',
      'build:prod': 'vue-cli-service build --modern',
      "report": "vue-cli-service build --report",
    },

    dependencies: {
      axios: '^0.19.0',
      lodash: '^4.17.15',
      vuex: '^3.1.2',
      dayjs: '^1.8.17',
      'normalize.css': '^8.0.1',
      'vue-router': '^3.1.3'
    },

    devDependencies: {
      plop: '^2.5.3',
      'compression-webpack-plugin': '^3.0.0'
    }
  })

  if (options.application === 'mobile') {
    api.extendPackage({
      dependencies: {
        fastclick: '^1.0.6',
        'lib-flexible': '^0.3.2'
      },

      devDependencies: {
        vconsole: '^3.3.4',
        'postcss-pxtorem': '^4.0.1'
      }
    })

    const plugins = ['../plugins/vconsole', '../plugins/fastclick']
    plugins.forEach(item => {
      api.render(item)
    })
  } else if (options['permission']) {
    const utils = ['../utils/permission']
    const directives = ['../directives/permission']
    const permission = [...utils, ...directives]

    permission.forEach(item => {
      api.render(item)
    })
  }

  getUiFramework(api, options)

  api.render('./template')
}
