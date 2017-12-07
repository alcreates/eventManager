const router = require('express').Router();
const passport = require('passport');




//auth logout

router.get('/logout',(req,res) =>{
    res.send('loggin out');
});

//auth with google
router.get('/google', passport.authenticate('google', {
   scope: ['profile'] 
}) );

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
   //req.user
    res.redirect('/');
});

const authCheck = (req, res, next ) =>{
    if(!req.user){
        // if user is not logged in.
        res.redirect('/auth/login');
    }else {
        // if they are logged in call next()
    }
}


module.exports = router;