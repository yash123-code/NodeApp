var express=require("express");
var app=express();
var bodyparser=require("body-parser");
var p=require("./circle")
app.use(bodyparser.urlencoded({extended:false}));
var logger=function(req,res,next){
	console.log(req);
	console.log(req.url);
	console.log(req.method);
    next();
} 
var welcome=function(req,res)
{
   res.sendFile("client1.html",{root:"."});
}
var calculate=function(req,res)
{
     res.send("area of circle::"+p.ar(req.body.radius)+"<br>"+"perimeter of circle::"+p.pr(req.body.radius)+"<br>");
}
app.use(logger);
app.use("/validate",calculate);
app.use("/",welcome);
app.listen(8181,()=>
{
    console.log("server started");
});