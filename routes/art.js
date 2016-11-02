const router = require('express').Router();
const Art = require('../models/art');



router.post('/', function(req, res) {
  console.log('adding new art');
  Art.create(req.body.username, req.body.password).then(function() {
    res.sendStatus(201);
  }).catch(function(err){
    console.log('Error in /register', err);
    res.sendStatus(500);
  });
});


module.exports = router;
