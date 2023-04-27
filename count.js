const express = require('express')
const app = new express()
const session = require('express-session')
app.use(session({secret:'meanstack'}))
app.get('/',(req,res)=>{
    if(req.session.count){
        req.session.count++;
        res.send("YOU VISITED THIS PAGE::::"+req.session.count+" times");
    
    }
    else{
        req.session.count=1;
        req.send("YOU VISITED THIS PAGE FIRST TIME");
    }
})
var server = app.listen(3000,()=>{console.log("SERVER RUNNING")})