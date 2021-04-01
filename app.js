const express=require('express');
const bodyparser=require('body-parser');

const app=express();

var items=["Buying Book","Complete project"];

app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));








app.get("/",function(req,res){
	var today=new Date();

	var current=today.getDay();
	var day="";

if(current===6 || current===0){
	day="weekend";
}else{
	day="weekday";
}
res.render("list",{kindofDay:day,newlistitem:items});
});


app.post("/",function(req,res){

	item=req.body.newItem;
	items.push(item);
	res.redirect("/");

});



app.listen(3000,function(){
	console.log("Server Started at 3000");
});

