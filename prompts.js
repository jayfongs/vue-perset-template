/**
 * @author: YouJie
 * @date: 2019-10-23 16:24:56
 */

module.exports = [
  {
    name: 'application',
    type: 'list',
    message: 'Choose whether application type is PC or mobile (default：PC)',
    choices: [
      {
        name: 'PC',
        value: 'pc'
      },
      {
        name: 'Mobile',
        value: 'mobile'
      }
    ],
    default: 'pc'
  },

  {
    name: 'ui-framework',
    type: 'list',
    message: 'choice UI Framework (default: none)',
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
    when: answers => answers.application === 'pc',
    default: 'element-ui'
  },

  {
    name: 'permission',
    type: 'confirm',
    message: 'Use permission judgment（management）',
    when: answers => answers['ui-framework'] === 'element-ui',
    default: false
  }
]
