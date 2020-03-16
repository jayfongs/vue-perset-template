/**
 * @author: YouJie
 * 全局公用弹框提示
 */

import { MessageBox, Message } from 'element-ui'

/**
 * 错误提示的弹窗
 * @param { String } message - 提示内容
 */
export const errorAlert = message => {
  const title = '错误提示'
  return MessageBox.alert(message, title, { type: 'error' })
}

/**
 * 确认删除提示的弹窗
 * @param { String } content - 提示内容
 */
export const confirmDelete = content => {
  const title = '温馨提示'
  const message = content || '此操作将永久删除选中的数据, 是否继续？'
  return MessageBox.confirm(message, title, { type: 'warning' })
}

/**
 * 消息通知提示
 * @param { String } message - 消息内容
 * @param { String | Object } [options=success] - 消息类型（success/warning/info/error）或者 https://element.eleme.io/#/zh-CN/component/message#options
 */
export const notification = (message, options) => {
  if (!options) {
    options = { type: 'success' }
  } else if (typeof options === 'string') {
    options = { type: options }
  }

  return Message({ message, ...options })
}
