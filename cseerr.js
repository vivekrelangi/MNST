/*var express = require('express');
var app = express();
var server = app.listen(3000,()=>{
    console.log("server running");
});
const fs=require('fs')
app.get('/',(req,res,next)=>{})*/
const express = require('express')
var app = express()
var server = app.listen(3000,()=>{
    console.log("server running");
});
const fs=require('fs')
app.get('/',(req,res,next)=>{
    fs.readFile('./rv.txt',(err,data)=>{
        if(err){
            next(err)//pass errors to express
        }
        else{
            res.send('success')
            console.log(data.toString())
            next()
        }
    })
})
app.use(function(err,req,res,next){
    res.status(500);
    res.send("Oops, something went wrong")
})
