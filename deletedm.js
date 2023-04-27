var fs = require('fs');
fs.unlink('csemean1.txt', function (err){
    if (err) console.log('error')
    else console.log('File deleted');
});