const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const keys = require('./keys');
const models = require('../models');
const bcrypt = require("bcrypt-nodejs");



passport.serializeUser((user,done)=>{
    //get user id from db.
    done(null,{ id : user.id, type: user.type });
});

passport.deserializeUser((user,done)=>{
    //call db to find user id;
   if(user.type == 'personal'){
            models.user.findAll({where:{id: user.id }}).then((user)=>{
                done(null,user);
            });
   }else{ 
       
            models.venue.findAll({where:{id: user.id }}).then((user)=>{
                done(null,user);
            });
    }
  
   
    
});

passport.use(new GoogleStrategy({
    
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret 
    },(accessToken, refreshToken, profile, done) => {
      
     models.user.findOrCreate({where:{
                          googleId: profile.id
                         }}).spread((user, created)=>{
                                let plainUser = user.get({plain: true});
                                done(null, plainUser);
                                console.log(created);
                         }).catch((error)=>{
                            console.log(error);
                         });
     
       
       
    })
)   


passport.use(new LinkedInStrategy({
  clientID: keys.linkedin.clientID,
  clientSecret: keys.linkedin.clientSecret,
  callbackURL: "/auth/signin-linkedin",
  scope: ['r_emailaddress', 'r_basicprofile'],
  state: true
}, function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect...
  process.nextTick(function () {
   
    models.user.findOrCreate({where:{
    
        linkedinId: profile.id
       }}).spread((user, created)=>{
              let plainUser = user.get({plain: true});
              done(null, plainUser);
              console.log(created);
       }).catch((error)=>{
          console.log(error);
       });

  });
}));

passport.use(new FacebookStrategy({
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clientSecret,
    callbackURL: "/auth/facebook/redirect"
  },
  function(accessToken, refreshToken, profile, done) {
    models.user.findOrCreate({where:{
            facebookId: profile.id
           }}).spread((user, created)=>{
                  let plainUser = user.get({plain: true});
                 return done(null, plainUser);
                  console.log(created);
           }).catch((error)=>{
              console.log(error);
           });
    return done(null,profile);
  }
));

passport.use('signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback : true
    },
    function(req, username, password, done) {
    
        
            models.user.findAll({where :{ email : username }}).then((user) =>{
                    
                    if(user.length > 0){
                        return done(null, false, 
                            req.flash('message','User Already Exists'));
                    }else{
                          bcrypt.hash(password, null, null, function(err, hash) {
                                models.user.create({
                                    email: req.body.email, 
                                    password: hash, 
                                    firstName: req.body.firstName,
                                    lastName: req.body.lastName,
                                    streetAddress: req.body.streetAddress ,
                                    state: req.body.state ,
                                    zipCode: req.body.zipcode,
                                    phoneNumber:req.body.phoneNumber, 
                                    type: req.body.type }).then((user) =>{
                                    
                                    return done(null, user);
                                }); 
                           });   
                    }
            
            
            });

}));

const isValidPassword = function(user, password){
    return bcrypt.compareSync(password, user.password);
}

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback : true

  },
  function(req, username, password, done) { 
      

    process.nextTick(function () {
    models.user.findOne({ email :  username }).then((user, err )=> {
       
         
            if (err)
            return done(err);
            
           
            if ( !user){
               
                return done(null, false, 
                    req.flash('message', 'User Not found.'));                 
            }
           
            if (!isValidPassword(user, password)){
              
                return done(null, false, 
                    req.flash('message', 'Invalid Password'));
            }
           
            return done(null, user);
    });
 });
}));

passport.use('venue-signup',new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback : true
    },
    function(req, username, password, done) {
        console.log(username);
        console.log(req.file, "this is file ---- ");

          
             models.venue.findOne({where :{ email : username }}).then((venue) =>{    
                 
                    
                    if(venue){
                        return done(null, false, 
                            req.flash('message','User Already Exists'));
                    }else{
                         

                          bcrypt.hash(password, null, null, function(err, hash) {
                                models.venue.create({
                                    email: req.body.email, 
                                    password: hash, 
                                    firstName: req.body.firstName,
                                    lastName: req.body.lastName,
                                    venueName: req.body.venueName,
                                    streetAddress: req.body.streetAddress ,
                                    state: req.body.state ,
                                    zipCode: req.body.zipcode,
                                    phoneNumber:req.body.phoneNumber, 
                                    image: req.file.filename }).then((venue) =>{
                                    
                                    return done(null, venue);
                                }); 
                           });   
                    }
            
            
            });

}));

passport.use('venue-login',new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback : true

  },
  function(req, username, password, done) { 
      

    process.nextTick(function () {
    models.venue.findOne({ email :  username }).then((venue, err )=> {
       
         
            if (err)
            return done(err);
            
           
            if ( !venue){
               
                return done(null, false, 
                    req.flash('message', 'User Not found.'));                 
            }
           
            if (!isValidPassword(venue, password)){
              
                return done(null, false, 
                    req.flash('message', 'Invalid Password'));
            }
           
            return done(null, venue);
    });
 });
}));
