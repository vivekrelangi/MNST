const express = require('express')
var app = express()
app.get('/',function(req,res,next){
    //create an error and pass it as an argument
    var err = new Error("Something is wrong");
    next(err);
    res.send("Vivek");
})
app.use(function(err,req,res,next){
    res.status(500);
    res.send,("Oops,something went wrong");
})
app.listen(3000,(req,res)=>{
    console.log("server started");
})