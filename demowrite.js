var fs = require('fs');
fs.writeFile('csemean1.txt', 'yo yo honey singher', function (err){
    if (err)
        console.log('error while writing');
    else
        console.log('write operation complete.');
});