const express = require('express')
const session = require('express-session')
const app = new express()
app.use(session({secret:'cse meanstack login example'}))
app.get('/login',(request,response)=>{
    const username = request.query.name
    const password = request.query.pwd
    //authentication
    if(username=='prasad' && password=='durga'){
        request.session.loggedin=true //initialization loggedin variable
        response.send("success")
    }
    else{
        response.send('Incorrect Username and/or Password')
    }
});
app.get('/next',(request,response)=>{
    if(request.session.loggedin) //reading loggedin variable
    {
        response.send('Secret content - only for logged user')
    }
    else{
        response.send('Please login to view this page')
    }
})
var server = app.listen(5000,()=>{console.log("SERVER RUNNING")})