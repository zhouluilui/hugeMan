const express = require("express");//引入模块
const bodyParser = require("body-parser");
const pool = require("./pool");
var app = express();//返回一个函数，创建对象
app.listen(3001);//
app.use(bodyParser.urlencoded({extended:false}))//使用bodyPaser中间件
app.use(express.static('public'))//托管静态资源到public
