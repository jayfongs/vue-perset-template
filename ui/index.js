/**
 * @author: YouJie
 * @date: 2019-10-23 16:56:09
 */

module.exports = (api, options) => {
  if (options['ui-framework'] === 'element-ui') {
    require('./element')(api, options)
  }
}
