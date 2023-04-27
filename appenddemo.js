var fs = require("fs")
fs.appendFile('csemean.txt','Text to be appended.',function (err){
    if (err)
        console.log('error while appending');
    else
        console.log('append successful');
})