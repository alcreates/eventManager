const router = require('express').Router();
const models = require('../models');



router.get('/featured', (req,res)=>{
     models.Venue.findAll().then(results =>{
        console.log(results);
        res.json(results);

     }).catch((error)=>{
        console.log(error);
     });
});


module.exports = router;