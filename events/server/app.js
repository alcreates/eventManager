const express = require('express');
const path = require('path');
const http = require('http');
const passportSetup = require('./config/passport-setup');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const Sequelize = require('sequelize');
const models = require('./models');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const flash = require('connect-flash');
const authRoutes = require('./routes/auth-routes');
const venueRoutes = require('./routes/venue-routes');
const eventRoutes = require('./routes/event-routes');
const cors = require('cors');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

// Point static path to dist
//app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, '/public')))

app.use('/auth', authRoutes);
app.use('/venue', venueRoutes);
app.use('/event', eventRoutes);
  

// app.get('*', (req, res) => {
//     //res.sendFile(path.join(__dirname, './public/index.html'));
//     redirect("http://localhost:4200");
// });


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
models.sequelize.sync().then(() => {

    server.listen(port, () => console.log(`API running on localhost:${port} `));

    
});
