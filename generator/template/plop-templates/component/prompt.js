/**
 * @author: YouJie
 */

const { notEmpty } = require('../utils.js')

module.exports = {
  description: '生成Vue组件',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入组件名称',
      validate: notEmpty('name')
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: 'Blocks:',
      choices: [
        {
          name: '<template>',
          value: 'template',
          checked: true
        },
        {
          name: '<script>',
          value: 'script',
          checked: true
        },
        {
          name: 'style',
          value: 'style',
          checked: true
        }
      ],
      validate(value) {
        if (
          value.indexOf('script') === -1 &&
          value.indexOf('template') === -1
        ) {
          return '组件至少需要一个<script>或<template>标记'
        }
        return true
      }
    }
  ],
  actions: data => {
    const name = '{{dashCase name}}'
    const actions = [
      {
        type: 'add',
        path: `src/components/${name}/index.vue`,
        templateFile: 'plop-templates/component/index.hbs',
        data: {
          name: name,
          template: data.blocks.includes('template'),
          script: data.blocks.includes('script'),
          style: data.blocks.includes('style')
        }
      }
    ]

    return actions
  }
}
