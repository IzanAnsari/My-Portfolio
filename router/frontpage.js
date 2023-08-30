const express= require('express')

//router object
const router=express.Router()

router.get('/', (req, res)=>{
    res.render("frontpage")
  });


  router.get('/expence', (req, res)=>{
    res.render("expence")
  });

  router.get('/chat', (req, res)=>{
    res.render("chat")

  });router.get('/intern', (req, res)=>{
    res.render("intern")
  });

  module.exports=router;