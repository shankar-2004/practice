const express = require('express');

const router = express.Router();

const path = require('path');
router.get('/getContent',(req,res,next)=>{
    // console.log("First Middleware");
    // res.send('<h1>shankaran</h1');
    // res.send('<h1>AddProduct</h1><form action="/getSecond" method="POST" type="text"><input type="text" name="title"/><input type="submit" value="submit"/></form>')
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
});

router.post('/getSecond',(req,res,next)=>{
    console.log("First Middleware");
    res.send('<h1>second</h1>');
    console.log(req.body);
});

module.exports = router;