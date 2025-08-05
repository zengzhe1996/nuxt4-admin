import { useUserStore } from '@/store/user'

/**
 * 基础请求方法
 * @param {string} method 请求方法
 * @param {string} url 请求地址
 * @param {object} data 请求数据
 * @param {object} options 额外配置
 */

const baseUrl = 'http://113.128.179.82:19989/api'
async function request(method, url, data = {}, options = {}) {
  const userStore = useUserStore()
  try {
    const config = {
      method,
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userStore.token}`,
        ...options.headers
      }
    }

    if (method === 'GET' || method === 'DELETE') {
      config.params = data
    } else {
      config.body = data
    }

    const response = await $fetch(baseUrl + url, config)

    // 这里可以添加全局响应处理逻辑
    if (response.code !== 200) {
      // 可以在这里处理业务错误，比如弹出错误提示
      // console.error(response)
      return Promise.reject(new Error(response.message || '请求失败'))
    }
    return response
  } catch (error) {
    // 统一错误处理
    console.error('请求错误:', error.message || '网络错误')

    // 返回一个统一的错误响应结构
    return {
      message: error.message || '网络错误',
      data: null
    }
  }
}

/**
 * GET 请求
 * @param {string} url 请求地址
 * @param {object} params 请求参数
 * @param {object} options 额外配置
 */
export function get(url, params = {}, options = {}) {
  return request('GET', url, params, options)
}

/**
 * POST 请求
 * @param {string} url 请求地址
 * @param {object} data 请求数据
 * @param {object} options 额外配置
 */
export function post(url, data = {}, options = {}) {
  return request('POST', url, data, options)
}

/**
 * PUT 请求
 * @param {string} url 请求地址
 * @param {object} data 请求数据
 * @param {object} options 额外配置
 */
export function put(url, data = {}, options = {}) {
  return request('PUT', url, data, options)
}

/**
 * DELETE 请求
 * @param {string} url 请求地址
 * @param {object} data 请求数据
 * @param {object} options 额外配置
 */
export function del(url, data = {}, options = {}) {
  return request('DELETE', url, data, options)
}

/**
 * PATCH 请求
 * @param {string} url 请求地址
 * @param {object} data 请求数据
 * @param {object} options 额外配置
 */
export function patch(url, data = {}, options = {}) {
  return request('PATCH', url, data, options)
}

export default {
  get,
  post,
  put,
  delete: del,
  patch
}
