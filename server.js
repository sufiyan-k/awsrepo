var express = require('express');
var app = express();
var routes=require("./routes/routers");
var app=express();
var bodyparser=require("body-parser");
var path=require("path");


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))
app.use("/",routes);

app.listen(5000);
console.log("server started at port 5000")
