const router = require('express').Router();
const passport = require('passport');




//auth logout

router.get('/logout',(req,res) =>{
    req.logout();
    res.redirect('/');
});

router.get('/authcheck',(req, res) =>{
    if(req.user){
        res.send(true);
    }else{
        res.send(false);
    }
});


//auth with google
router.get('/google', passport.authenticate('google', {
   scope: ['profile'] 
}) );

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
   //req.user
    res.redirect('/');
});

router.get('/linkedin', passport.authenticate('linkedin'),(req,res)=>{

});

router.get('/signin-linkedin', passport.authenticate('linkedin'),(req,res)=>{
    res.redirect('/');
});

router.get('/facebook',
passport.authenticate('facebook'));

router.get('/facebook/redirect',
passport.authenticate('facebook', {successRedirect : '/', failureRedirect:'/'}),
function(req, res) {
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