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
   
   
    models.Appointment.findAll({where: {venueId: req.query['id']}}).then(results =>{
      
       res.json(results);

    }).catch((error)=>{
       console.log(error);
    });
});

router.post('/post-events',(req,res,next)=>{
    
    req.body.events.forEach((event)=>{
            models.Appointment.upsert({id: event.id, start: event.start, end: event.end, title: event.title }).then(results =>{
                next();
            }).catch((error)=>{
                console.log(error);
            });
    });
});


module.exports = router;