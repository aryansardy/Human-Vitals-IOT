import express from "express";
import bodyparser from "body-parser"
import puppeteer from "puppeteer-core";
const port=3000;
const app=express();
app.listen(port,()=>{
    console.log(`server live at -> ${port}`);
})
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.static('views'))

app.get("/",(req,res)=>{
    res.render("index");
    
})

app.post("/app",(req,res)=>{
    var pName= req.body.name;
    var pId=req.body.id;
    var pAge=req.body.age;

    res.render("app",{name:"Patient's Name : "+ pName,id:"Patient's ID : "+pId,age:"Patient's Age : "+pAge})
})
app.get("/app",(req,res)=>{
    res.render("index");
})

