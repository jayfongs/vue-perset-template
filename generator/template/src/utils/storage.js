/**
 * @author: YouJie
 * 全局存储
 */

const TITLE = '<%= rootOptions.projectName %>'
const USER_INFO = `${TITLE}-user-info`
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

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return JSON.parse(localStorage.getItem(USER_INFO))
}

/**
 * 设置用户信息
 * @param { Object } userInfo
 */
export const setUserInfo = userInfo => {
  localStorage.setItem(USER_INFO, JSON.stringify(userInfo))
}

/**
 * 清除用户信息
 */
export const removeUserInfo = () => {
  localStorage.removeItem(USER_INFO)
}
