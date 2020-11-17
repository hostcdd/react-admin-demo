import axios from 'axios'
import Qs from 'qs'

// axios 配置
axios.defaults.timeout = 2000;
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : 'http://10.16.10.18:8500/fns'


// http request 拦截器
// axios.interceptors.request.use(
//     config => {
//         if (localStorage.getItem('token')) {
//             config.headers.Authorization =  `Bearer ${localStorage.getItem('token')}`;
//         }
//         return config;
//     },
//     err => {
//         alert('请求超时')
//         return Promise.reject(err);
//     });

// // http response 拦截器
axios.interceptors.response.use(
  response => {
    // console.log('----',response)
    if (response.data.retCode === '000302') {
      localStorage.removeItem('username')
      // localStorage.clear()
      window.location = '/#/login'
    }
    return response;
  },
  err => {
    // console.log('-----',JSON.stringify(err))

    // window.location = '/#/login'
      // if (err.response.status == 504||err.response.status == 404) {
      //   alert('服务器被吃了')
      // } else if (err.response.status == 403) {
      //   alert('权限不足,请联系管理员')
      // }else if(err.response.data == 401){
      //   // 401 清除token信息并跳转到登录页面
      //   // store.commit(types.LOGOUT);
      //   //跳转到登录页面
      //   window.location = '/#/login'
      //   // router.replace({
      //   //     path: 'login',
      //   //     query: {redirect: router.currentRoute.fullPath}
      //   // })
      // }else {
      //     alert('未知错误')
      
      // }
      // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
      // return Promise.reject(err.response.data)
  }
);

let base = ''
const post = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function (data) {
      return Qs.stringify(data,  {allowDots: true})
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

const get = (url, params) => {
  return axios({
    method: 'get',
    url: `${base}${url}`,
    params: params,
    paramsSerializer: function(params) {
      return Qs.stringify(params, {arrayFormat: 'repeat'})
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

export let requst = {get,post}


