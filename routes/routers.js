var express=require("express");
var fs=require("fs");
var router=express.Router();
var path=require("path");

router.get('/',(req,res)=>{
    res.sendFile(path.join(___dirname + '/index.html'));
})

module.exports=router;