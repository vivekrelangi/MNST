const express = require('express');
const app = express();
var server = app.listen(5000,()=>{console.log("server running")})
const mongoose = require('mongoose');
let b = mongoose.connect('mongodb://127.0.0.1:27017/cseTask');
b.then((data)=>{console.log("success")});
b.catch((error)=>{console.log("connection failed")});
const cses2 = new mongoose.Schema({
    _id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    mob:{
        type: Number,
        required: true
    },
    percentage:{
        type: Number,
        required: true
    },
},{
    versionkey: false
})
const cse1 = mongoose.model("datacse",cses2)
/*cse1.insertMany([
    {
        _id:506,
        name:"krish",
        mob:94534,
        percentage:89
    },
    {
        _id:507,
        name:"Santhu",
        mob:923534,
        percentage:87  
    }
]).then((data)=>{console.log("inserted successfully")})*/
cse1.find().sort({percentage:-1}).limit(1).then((data)=>{console.log(data)})//.catch(()=>{console.log("undone")})
app.get("/pin/:id",(req,res)=>{
    var c = req.params.id;
    cse1.findOne({_id:c}).then((data)=>{res.send(data)}).catch(()=>{console.log("unsuccessful code")})
})