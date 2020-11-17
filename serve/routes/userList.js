var express = require('express');
var router = express.Router();


const mysql = require('mysql')
let db = require("../config/db");
let user = require("../config/user");
var connection = mysql.createConnection(db.mysql);
connection.connect(err => {
    if(err) throw err
    console.log('数据库连接成功！')
});
 

/**
 * 查询用户列表页
 */
router.get("/getUserList",function(req,res,next){
    connection.query(user.query,function(err,rows){
        if(err){
            res.send({
                status: 400,
                msg: '没有找到'
              })
              res.end()
        }else {
            //返回接口
            // res.send({
            //     status: 200,
            //     msg: '返回成功',
            //     datas:rows
            //   })
            //   res.end()
            //返回页面渲染
            res.render("users",{title:"用户列表",datas:rows});
        }
    });
  });
  //登录接口
  router.get("/login",function(req,res,next){
      const sql = user.queryName
    connection.query(sql,[req.query.userName,req.query.password],function(err,rows){
        if(err){
            res.send({
                status: 400,
                msg: '没有找到'
              })
              res.end()
        }else {
            if(rows.length > 0){
                res.send({
                    status: 200,
                    msg: '返回成功',
                  })
            }else{
                res.send({
                    status: 300,
                    msg: '该用户不存在',
                  })
            }
              res.end()
        }
    });
  });
//   connection.end() //会报错
  module.exports = router;