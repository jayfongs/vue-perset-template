/**
 * @author: YouJie
 * 全局工具方法
 */

import router from '@/router'
import { errorAlert } from './layer'
import { removeAccessToken, removeUserInfo } from './storage'

/**
 * HTTP 异常处理
 * @param { Objcet } response - 返回信息
 */
export const throwHttpError = response => {
  const { status, data, config } = response

  switch (status) {
    case 401:
      removeAuthInvalid()
      router.replace({
        path: '/login',
        query: {
          redirect: router.currentRoute.fullPath
        }
      })
      break
    case 403:
      errorAlert(`【${status}】${data.errorMessage}`)
      break
    case 404:
      errorAlert(`【${status}】请求资源不存在${config.url}`)
      break
    case 400:
    case 405:
    case 408:
    case 422:
    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
      errorAlert(`【${status}】${data.errorMessage}`)
      break
    default:
      errorAlert('网络未知错误')
      break
  }
}

/**
 * 清除认证失效
 */
export const removeAuthInvalid = () => {
  removeAccessToken()
  removeUserInfo()
}

/**
 * 处理为假的数据全部格式化成 '--'
 * @param { Array | Object } items - 需要格式化的数组或者对象
 * @return { Array | Object } 返回格式化后的数组或者对象
 */
export const formatEmptyData = items => {
  if (items instanceof Array) {
    items.forEach(data => {
      Object.keys(data).forEach(item => {
        if (data[item] === 0) return

        if (!data[item]) {
          data[item] = '--'
        }
      })
    })
  } else if (items instanceof Object) {
    Object.keys(items).forEach(item => {
      if (items[item] === 0) return

      if (!items[item]) {
        items[item] = '--'
      }
    })
  }

  return items
}
