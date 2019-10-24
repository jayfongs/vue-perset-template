/**
 * @author: YouJie
 * @date: 2019-10-23 16:24:56
 */

module.exports = [
  {
    name: 'ui-framework',
    type: 'list',
    message: 'choice UI Framework(default:none)',
    choices: [
      {
        name: 'Element UI',
        value: 'element-ui'
      },
      {
        name: 'none',
        value: 'none'
      }
    ],

    default: 'none'
  }
]
