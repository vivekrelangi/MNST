var express = require('express');
var router = express.Router();
router.get('/',function(req,res){
    res.send("yo");
});
//export this router to use in our index.js
module.exports = router;