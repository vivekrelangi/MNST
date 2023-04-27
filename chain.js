var express = require('express');
var app = express();
/*var server =*/ app.listen(3000,()=>{
    console.log("server running");
})
function ismorning (){
    return false;
}
app.get("/hello",
(req,res,next)=>{
    if(ismorning ()){
        res.send("morning");
    }else{
        next();
    }
},
(req,res,next)=>{
    res.send("afternoon");
})
