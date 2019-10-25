/**
 * @author: YouJie
 * @date: 2019-10-23 16:44:42
 */

module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    scripts: {
      theme: 'et -c ./src/assets/scss/element-variables.scss',
      'theme:init':
        'et -i ./src/assets/scss/element-variables.scss && npm run theme',
      'theme:watch': 'et -wc ./src/assets/scss/element-variables.scss'
    },

    dependencies: {
      'element-ui': '^2.12.0'
    },

    devDependencies: {
      'element-theme': '^2.0.1',
      'element-theme-chalk': '^2.12.0'
    }
  })

  api.render('./element')
}
