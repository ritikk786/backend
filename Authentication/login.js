const express = require('express');

const router = express.Router();

router.get('/login',(req, res, next )=>{
    res.send(`
    <h1>login page</h1>
    <form action = "/" method="POST" onSubmit="localStorage.setItem('username',document.getElementById('username').value)" >
    <input type="text" id="username" name="username">
    <button type="submit"> Login </button> 
    </form>
    `)
})

router.post('/',(req,res,nex)=>{
    console.log(req.body.username)
    console.log('this is in login')
    res.redirect('/')
})

module.exports = router;