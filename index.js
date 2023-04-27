var http = require('http');
var fs = require('fs')
 
var server = http.createServer(function(req,res) { // create web server
    if (req.url == '/'){//check the URL of the current request
    
        //set response header
        res.writeHead(200, {'Content-Type':'text/html'});
    
        //set response content
        res.write('<html><body bgcolor="cyan"><h1>This is home page.<h1></body></html>');
        res.end();
    }
    else if (req.url == "/student") {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<html><body bgcolor="yellow"><p>This is student Page.</p></body></html>');
        res.end();
    }
    else if (req.url == "/admin"){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<html><body bgcolor="pink"><p>This is admin Page.</p></body></html>');
        res.end();
    }
    else if (req.url == "/dp"){
        
        fs.readFile("./dp1.html",function(err, data){
            if (err){
                console.log(err);
            }
            else {
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
            }
            res.end();
        });
    }
    else if (req.url == "/ms"){
        
        fs.readFile("./meanstack.html",function(err, data){
            if (err){
                console.log(err);
            }
            else {
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
            }
            res.end();
        });
    }
    else if (req.url == "/ml"){
        
        fs.readFile("./ml.html",function(err, data){
            if (err){
                console.log(err);
            }
            else {
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
            }
            res.end();
        });
    }
    else {
        res.end('Invalid Request');
    }
});

server.listen(4000);// 6 listen for any incoming requests

console.log('Node.js web server at port 4000 is running')