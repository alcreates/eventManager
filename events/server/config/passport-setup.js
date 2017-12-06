const passport = require('passport');
const GoogleStrategy = require('passport-google-oauh20');
const keys = require('./keys');

passport.use(new GoogleStrategy({
    //options for google 
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret 
}),() => {

});