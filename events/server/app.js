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
// const sequelize = new Sequelize(keys.database.db , keys.database.username, keys.database.password, {
//     host: 'localhost',
//     port:'8889',
//     dialect: 'mysql',
  
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }

//   });

//   sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

//   const User = sequelize.define('user', {
//     firstName: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     lastName: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     phoneNumber: {
//       type: Sequelize.STRING  
//     },
//     streetAddress: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     zipCode: {
//         type: Sequelize.INTEGER,
//         allowNull:false
//     },
//     email: {
//         type: Sequelize.STRING,
//         unique: true,
//         allowNull:false
//     },
//     type: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     password: {
//         type: Sequelize.STRING
//     }
//   });
  
  // force: true will drop the table if it already exists
 // User.sync({force: true}).then(() => {
    // Table created
   
 // });
  

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
models.sequelize.sync().then(() => {

    server.listen(port, () => console.log(`API running on localhost:${port}`));

});
