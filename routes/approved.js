var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'solo'
};

var pool = new pg.Pool(config);

router.put('/', function(req, res){
    pool.connect(function(err, client, done){
        if (err){
            console.log('connected to db');
            res.sendStatus(500)
            done();
            return;
        }

        client.query("UPDATE art SET status = 'approved' WHERE id = $1;", [req.body.id],
        function(err,result){
            done();
            if(err){
                console.log('Error querying the DB', err);
                res.sendStatus(500);
                return;
            }
            console.log('req.body.index', req.body.id);
            console.log('updated status');

        });
      });
    });

module.exports = router;
