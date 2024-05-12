const express = require('express');
const fs= require('fs')

const router = express.Router();


router.get('/',(req, res, next)=>{
    fs.readFile('message.txt', (err,data)=>{
      if(err){
         console.log(err)
         data='No messages'
      }
      
      res.send(`
      ${data}<br>
      <form action="/message" id="texmessage"  method="POST" onSubmit="document.getElementById('logusername').value=localStorage.getItem('username')">
      <input type="text" id="message" name="message">
      <input  type="hidden" id="logusername" name="logusername" >
      <button type="submit"> Send </button> 
      </form>
      `)
    })
    router.post('/message',(req,res, next)=>{
      fs.writeFile("message.txt", `${req.body.logusername}:${req.body.message}`,{flag : 'a'},(err)=>
        err ? console.log(err) : res.redirect('/')
      )
      //  console.log(req.body.message)
      //  console.log(req.body.logusername)
      //  res.redirect('/')
    })
 })

module.exports = router;