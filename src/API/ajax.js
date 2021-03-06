function makeRequest(config) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open(config.method, config.url)
    xhr.withCredentials = true
    xhr.onload = () => {
      if (xhr.status === 401) {
        // alert('登录失效或无权访问，请重新登录')
        // localStorage.clear()
        // window.location.href = '/'
      }
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          resolve(JSON.parse(xhr.response))
        } catch(e) {
          resolve(xhr.response)
        }
      } else {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        })
      }
    }
    xhr.onerror = () => {
      reject({
        status: xhr.status,
        statusText: xhr.statusText
      })
    }
    if (config.headers) {
      Object.keys(config.headers).forEach(function (key) {
        xhr.setRequestHeader(key, config.headers[key])
      })
    }
    if (typeof config.data !== 'undefined') {
      xhr.send(config.data)
    }
  })
}

//  配置url
function config_url(url) {
  const baseUrl = 'http://api.helloyzy.cn:8080'
  return baseUrl + url
}

//  配置method
function config_method(method) {
  return method.toUpperCase()
}

//  查询字符串
//  {name: 'van', age: '18'} --> 'xxx?name=van&age=18'
function config_queryString(data) {
  let str = ''
  if (typeof data === 'undefined' || Object.keys(data).length === 0) {
    return str
  }
  const keys = Object.keys(data)
  const values = Object.values(data)
  keys.forEach((item, index) => {
    str += item + '=' + values[index] + '&'
  })
  return '?' + str.slice(0, str.length - 1)
}

//  Restful
// {id: 1} ---> 'xxxx/1'
function config_restful(data) {
  let str = ''
  const values = Object.values(data)
  values.forEach(item => {
    str += '/' + item
  })
  return str
}
//  根据method匹配参数
const config_mothods = {
  GET: (url, data) => {
    return {
      method: 'GET',
      url: url + config_queryString(data),
      headers: {
        "Content-Type": 'application/json'
      },
      data: {}
    }
  },
  GET_RESTFUL: (url, data) => {
    return {
      method: 'GET',
      url: url + config_restful(data),
      headers: {
        "Content-Type": 'application/json'
      },
      data: {}
    }
  },
  POST: (url, data) => {
    return {
      method: 'POST',
      url: url,
      data: data,
      headers: {
        "Content-Type": 'application/json'
      }
    }
  },
  POST_RESTFUL: (url, data) => {
    return {
      method: 'POST',
      url: url + '/' + data.id,
      data: {},
      headers: {
        "Content-Type": 'application/json'
      }
    }
  },
  DELETE_RESTFUL: (url, data) => {
    if (typeof data.value !== 'undefined') {
      let name = Object.keys(data.value)[0]
      let value = Object.values(data.value)[0]
      let params= {}
      params[name] = value
      return {
        method: 'DELETE',
        url: url + '/' + data.id,
        data: JSON.stringify(params),
        headers: {
          "Content-Type": 'application/json'
        }
      }
    }
    return {
      method: 'DELETE',
      url: url + '/' + data.id,
      data: {},
      headers: {
        "Content-Type": 'application/json'
      }
    }
  },
  PUT: (url, data = {}) => {
    return {
      method: 'PUT',
      url: url,
      data: data,
      headers: {
        "Content-Type": 'application/json'
      }
    }
  },
  GET_CONF: (url) => {
    return {
      method: 'GET',
      url: url,
      data: {},
      headers: {
        "Content-Type": 'application/json'
      }
    }
  },
  /*
  PUT_RESTFUL:
   {
      id: 1,
      value: {
        school: 'van'
      }
   }
   ---> PUT 'url/1' send({"school": "van"})
   */
  PUT_RESTFUL: (url, data) => {
    if (typeof data.value !== 'undefined') {
      let name = Object.keys(data.value)[0]
      let value = Object.values(data.value)[0]
      let params= {}
      params[name] = value
      return {
        method: 'PUT',
        url: url + '/' + data.id,
        data: JSON.stringify(params),
        headers: {
          "Content-Type": 'application/json'
        }
      }
    }
    return {
      method: 'PUT',
      url: url + '/' + data.id,
      data: {},
      headers: {
        "Content-Type": 'application/json'
      }
    }
  }
}

function config_params(method, url, data) {
  return config_mothods[method](url, data)
}

const ajax = (method, url, data) => {
  if(method==='getdonate')
  return makeRequest({
    method: 'GET',
    url: 'http://redflower.whalefoundation.cn:8000'+url+config_queryString(data),
    data:{},
    headers: {
      "Content-Type": 'application/json'
    }
  })
  else
  return makeRequest(config_params(config_method(method), config_url(url), data))
}

export default ajax