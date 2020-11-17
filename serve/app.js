const express = require('express')
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

let router = express.Router()
let userList = require('./routes/userList');


const app = express()
const port = 3000
// app.get('/', (req, res) => res.send('Hello World!'))

// view engine setup 设置模板和渲染页面路径，否则报错
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public'))); //静态资源js、css、image

//允许前端 跨域请求
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type', "application/json;charset=utf-8");
  next();
});


app.use('/userList',userList)
app.listen(port, () => console.log(`服务器启动-- ${port}!`))
