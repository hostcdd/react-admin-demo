This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm install`
安装依赖

In the project directory, you can run:
### `npm start`
启动开发环境

### `npm run build`
打包生产环境，BrowserRouter路由模式刷新页面无效，HashRouter模式可以
如需history部署，需要单独配置

###build文件夹
打包后生产环境部署文件

### 开发环境技术栈 摒弃了class的写法全部采用react-hook的写法（纯函数）
react 
react-router-dom（页面路由）
redux（提供createStore，combineReducers，applyMiddleware...）
react-redux（提供Provider和connect组件）
axios（请求库）
antd（ui框架）

### src开发目录
index.js 入口文件
App.js 登录之后的路由组件
routerMap.js 所有路由路径


--components文件夹
    公用组件，如布局，头部组件
--pages文件夹
    页面组件
 --store文件夹
    全局状态管理
--utils文件夹
    工具相关的，如是否登录验证，请求封装，环境配置
