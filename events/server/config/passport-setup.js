const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
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
      
        // call back
        // get user info from data base or create new user.
        // use id from data base to create a cookie. 
        //console.log(profile.id, profile.name.familyName )
     models.user.findOrCreate({where:{
                          firstName : profile.name.givenName,
                          lastName: profile.name.familyName,
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