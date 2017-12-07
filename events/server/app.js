const express = require('express');
const path = require('path');
const http = require('http');
const passportSetup = require('./config/passport-setup');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
//const cors = require('cors');

const bodyParser = require('body-parser');
const mysql = require('mysql');
const authRoutes = require('./routes/auth-routes');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());
// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));

app.use('/auth', authRoutes);


const connection = mysql.createConnection({
    host: 'localhost',
    port:8889, 
    user: 'root',
    password: 'root',
    database: 'sit_parker'
});
connection.connect(function(err){
    if(!err){
        console.log("Database is connected ");
    }else {
        console.log(err);
        console.log("Error connecting database");
    }

});

// Catch all other routes and return the index file

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));