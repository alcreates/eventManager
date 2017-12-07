const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.serializeUser((user,done)=>{
    //get user id from db.
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    //call db to find user id;
    done(null,user.id);
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
        console.log(profile);
        done()
    })
)   