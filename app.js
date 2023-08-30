const express =require('express')
const path=require('path');
const port= 1000
const app=express()

app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


const Router1=require("./router/frontpage")

app.use(Router1);

app.listen(port,()=>{
    console.log("server started")
})

