const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mysql = require('mysql');

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));



app.post('/api/test', function () {
    //let groceryServiceObj = new groceryService(req, res)
    //groceryServiceObj.addGrocery()
     console.log("reached end point");
  });



app.listen(3000, function(){
    console.log('server connected');
});