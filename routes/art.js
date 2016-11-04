var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'solo'
};

var pool = new pg.Pool(config);


router.get('/', function(req, res){
    pool.connect(function(err, client, done){
        if (err){
            console.log('connected to db');
            res.sendStatus(500)
            done();
            return;
        }

        client.query("SELECT * FROM art WHERE status = 'pending';",

        function(err,result){
            done();
            if(err){
                console.log('Error querying the DB', err);
                res.sendStatus(500);
                return;
            }
          console.log('result.rows=', result.rows[0]);
          res.send(result.rows[0]);
        });
    });
    });





router.post('/', function(req, res){
    pool.connect(function(err, client, done){
        if (err){
            res.sendStatus(500)
            done();
            return;
        }
        client.query('INSERT INTO art (first_name, last_name, img1, img2, img3, img4, word1, word2, word3, word4, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) returning (img1);',
        [req.body.firstName, req.body.lastName, req.body.draw1, req.body.draw2, req.body.draw3, req.body.draw4, req.body.word1, req.body.word2, req.body.word3, req.body.word4, req.body.pend],
        function(err,result){
            done();
            if(err){
                res.sendStatus(500);
                return;
            }
          console.log('result.rows=', result.rows);
          res.send(result.rows);

          //res.sendStatus(200);

        });
    });
});


module.exports = router;
