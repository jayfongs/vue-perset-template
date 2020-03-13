/**
 * @author: YouJie
 */

import Axios from 'axios'
import { throwHttpError } from '@/utils'
import { getAccessToken } from '@/utils/storage'

Axios.defaults.timeout = 30 * 1000
Axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL

Axios.interceptors.request.use(
  config => {
    if (getAccessToken()) {
      config.headers['Authorization'] = 'Bearer ' + getAccessToken()
    }
    return config
  },

  error => {
    return Promise.reject(error)
  }
)

Axios.interceptors.response.use(
  response => {
    return Promise.resolve(response)
  },

  error => {
    if (error.code === 'ECONNABORTED') {
      console.log('请求超时！！！')
    } else {
      throwHttpError(error.response)
    }
    return Promise.reject(error)
  }
)

export default Axios
