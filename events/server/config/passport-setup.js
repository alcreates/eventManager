const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const keys = require('./keys');
const models = require('../models');

passport.serializeUser((user,done)=>{
    //get user id from db.
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    //call db to find user id;
    models.user.findAll({where:{id: id }}).then((user)=>{
        done(null,user);
    });
    
});

passport.use(new GoogleStrategy({
    //options for google 
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
    // models.user.findOrCreate({where:{
    //         facebookId: profile.id
    //        }}).spread((user, created)=>{
    //               let plainUser = user.get({plain: true});
    //              return done(null, plainUser);
    //               console.log(created);
    //        }).catch((error)=>{
    //           console.log(error);
    //        });
    return done(null,profile);
  }
));
