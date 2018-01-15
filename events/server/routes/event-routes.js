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

router.get('/get-events', (req,res)=>{
   
   
    models.events.findAll({where: {id: req.query['id']}}).then(results =>{
      
       res.json(results);

    }).catch((error)=>{
       console.log(error);
    });
});

router.post('/post-events',(req,res)=>{
    console.log(req.body , "this is query");
});


module.exports = router;