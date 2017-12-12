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

router.post('/signup', passport.authenticate('signup', {
                                    successRedirect: '/',
                                    failureRedirect: '/',
                                    failureFlash : true 
                                })
);


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

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/redirect',
passport.authenticate('facebook', {successRedirect : '/', failureRedirect:'/'}),
function(req, res) {
    res.redirect('/');
});

// router.post('/login', passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/',
//     failureFlash : true 
// }), (req, res)=>{
//     res.send(req);
// });

// router.post('/login', passport.authenticate('local',(err,req)=>{
//     console.log(req);
//     res.redirect('/');
    
// }));

router.post('/login',(req, res, next)=>{
    passport.authenticate('local', (err, user,info)=>{
        if (err) { return next(err); }
        if (!user) { return res.json({auth: false}); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            console.log('logged');
            return res.json({auth : true});
          });
    })(req, res, next);
});
// router.get('/login/redirect', (req,res)=>{
//    console.log('redirect');
//     res.redirect('http://localhost:3000');
// });

 

module.exports = router;