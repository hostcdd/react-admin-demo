This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm install`
安装依赖

In the project directory, you can run:
### `npm start`
启动开发环境

### `npm run build`
打包生产环境，BrowserRouter路由模式刷新页面无效，HashRouter模式可以
如需history部署，需要单独配置

### build文件夹
打包后生产环境部署文件

### 开发环境技术栈 摒弃了class的写法全部采用react-hook的写法（纯函数）

- react 
- react-router-dom（页面路由）
- redux（提供createStore，combineReducers，applyMiddleware...）
- react-redux（提供Provider和connect组件）
- axios（请求库）
- antd（ui框架）


### src开发目录

+ index.js 入口文件
+ App.js 登录之后的路由组件
+ routerMap.js 所有路由路径
+ components文件夹
    + 公用组件，如布局，头部组件
+ pages文件夹
    + 页面组件
+ store文件夹
    + 全局状态管理
+ utils文件夹
    + 工具相关的，如是否登录验证，请求封装，环境配置


### serve文件夹后台目录
`
express+mysql
`
+ config 数据库配置和操作
+ public静态资源 例如：js,images,css...
+ routes 路由操作，由于使用前后端分离，只提供接口，如果需要页面渲染在views文件夹
+ views页面文件，暂时不用
+ app.js启动入门文件 
    + node app.js

#### 入口文件说明 (-)
(1) var app = express()：生成一个express实例 app。

(2)app.set('views', path.join(__dirname, 'views’))：设置 views 文件夹为存放视图文件的目录, 即存放模板文件的地方,__dirname 为全局变量,存储当前正在执行的脚本所在的目录。

(3)app.set('view engine', 'ejs’)：设置视图模板引擎为 ejs。

(4)app.use(favicon(__dirname + '/public/favicon.ico’))：设置/public/favicon.ico为favicon图标。

(5)app.use(logger('dev’))：加载日志中间件。

(6)app.use(bodyParser.json())：加载解析json的中间件。

(7)app.use(bodyParser.urlencoded({ extended: false }))：加载解析urlencoded请求体的中间件。

(8)app.use(cookieParser())：加载解析cookie的中间件。

(9)app.use(express.static(path.join(__dirname, 'public')))：设置public文件夹为存放静态文件的目录。

(10)app.use('/userList', userList)：路由控制器。

