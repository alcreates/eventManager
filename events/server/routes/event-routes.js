const router = require('express').Router();
const models = require('../models');



router.get('/locations', (req,res)=>{
     models.event_location.findAll().then(results =>{
        console.log(results);
        res.json(results);

     }).catch((error)=>{
        console.log(error);
     });
});


module.exports = router;