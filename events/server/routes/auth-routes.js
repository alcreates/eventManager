const router = require('express').Router();
const passport = require('passport');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());


//auth logout

router.get('/logout',(req,res) =>{
    res.send('loggin out');
});

//auth with google
router.get('/google', passport.authenticate('google', {
   scope: ['profile'] 
}) );

router.get('/redirect',(req,res)=>{
    res.send('redirected');
});


module.exports = router;