let baseURL; 
let imgUrl = '';
if(process.env.NODE_ENV === 'development'){
  baseURL = '';         //开发环境
}else{
  baseURL = '';         //生产环境
}


export default {imgUrl, baseURL}