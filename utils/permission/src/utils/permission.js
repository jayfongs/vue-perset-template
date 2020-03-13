/**
 * @author: YouJie
 * 权限判断函数
 * 在某些情况下，不适合使用 v-permission。只能通过手动设置 v-if 来实现
 */

 /**
  * @param { Array } value - 权限
  * @returns { Boolean }
  */
export default value => {
  if (value && value instanceof Array && value.length > 0) {
    const { resRight } = getUserInfo()
    const permissionRoles = value

    const hasPermission = resRight.some(role => permissionRoles.includes(role))

    if (!hasPermission) {
      return false
    }
    return true
  } else {
    console.error('需要对应权限，并且是一个不为空的数组')
    return false
  }
}
