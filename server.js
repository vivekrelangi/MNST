const express = require("express");
var app = express();
var mongoose = require('mongoose');
let b = mongoose.connect('mongodb://127.0.0.1:27017/csedata');
b.then((data)=>{console.log("success")});
b.catch((err)=>{console.log("connection to mongodb unsuccessful")})
var server = app.listen(5000,(req,res)=>{console.log("port:5000")});