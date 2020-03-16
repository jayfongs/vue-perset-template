/**
 * @author: YouJie
 * 全局存储
 */

const TITLE = '<%= rootOptions.projectName %>'
const AUTH_ACCESS_TOKEN = `${TITLE}-access-token`

/**
 * 获取用户认证令牌
 */
export const getAccessToken = () => {
  return localStorage.getItem(AUTH_ACCESS_TOKEN)
}

/**
 * 获取用户认证令牌
 * @param { String } token
 */
export const setAccessToken = token => {
  localStorage.setItem(AUTH_ACCESS_TOKEN, token)
}

/**
 * 清除用户认证令牌
 */
export const removeAccessToken = () => {
  localStorage.removeItem(AUTH_ACCESS_TOKEN)
}
