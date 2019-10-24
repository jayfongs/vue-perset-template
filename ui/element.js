/**
 * @author: YouJie
 * @date: 2019-10-23 16:44:42
 */

module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      'element-ui': '^2.12.0'
    }
  })
  api.render('./element')
}
