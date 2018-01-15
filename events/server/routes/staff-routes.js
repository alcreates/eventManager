const router = require('express').Router();
const models = require('../models');



router.get('/member', (req,res)=>{
   
   
     models.Admin_User.findAll({where: {id: req.query['id']}}).then(results =>{
       
        res.json(results);

     }).catch((error)=>{
        console.log(error);
     });
});


module.exports = router;