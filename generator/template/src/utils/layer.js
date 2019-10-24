/**
 * @author: YouJie
 * 全局公用弹框提示
 */

import { MessageBox } from 'element-ui'

/**
 * 错误提示的弹窗
 * @param { String } message - 提示内容
 */
export const errorAlert = message => {
  return MessageBox.alert(message, '错误提示', {
    type: 'error'
  })
}

/**
 * 确认删除提示的弹窗
 */
export const confirmDelete = () => {
  return MessageBox.confirm(
    '此操作将永久删除选中的数据, 是否继续？',
    '温馨提示',
    {
      type: 'warning'
    }
  )
}
