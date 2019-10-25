/**
 * @author: YouJie
 */

const viewGenerator = require('./plop-templates/view/prompt')
const componentGenerator = require('./plop-templates/component/prompt')

module.exports = plop => {
  plop.setGenerator('view', viewGenerator)
  plop.setGenerator('component', componentGenerator)
}
