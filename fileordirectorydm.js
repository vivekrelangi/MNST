var fs = require('fs')
fs.mkdir('csemean',function (err){
    if (err)
    {
        console.log('error');
    }
    else
    {
        console.log('created');
    }
});