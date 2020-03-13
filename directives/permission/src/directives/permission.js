/**
 * @author: YouJie
 * 权限判断指令
 */

import { getUserInfo } from '@/utils/storage'

export default {
  inserted(el, binding) {
    const { value } = binding
    const { resRight } = getUserInfo()

    if (value && value instanceof Array && value.length) {
      const hasPermission = resRight.some(item => value.includes(item.ctrlId))

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error('需要对应权限，并且是一个不为空的数组')
    }
  }
}
