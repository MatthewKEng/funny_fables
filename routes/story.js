var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'solo'
};

var pool = new pg.Pool(config);
var dis = this


router.get('/', function(req, res){
    pool.connect(function(err, client, done){
        if (err){
            console.log('connected to db');
            res.sendStatus(500)
            done();
            return;
        }
//get random story here and place into empty array
        client.query("SELECT img1, word1, img2, word2, img3, word3, img4, word4 FROM art WHERE status = 'approved';",

        function(err,result){
            done();
            if(err){
                console.log('Error querying the DB', err);
                res.sendStatus(500);
                return;
            }
            console.log('result from db = ', result.rows);

            page1 = []
            page2 = []
            page3 = []
            page4 = []

            for (var i = 0; i < result.rows.length; i++ ) {
              var row = result.rows[i];

              page1.push([row.img1, row.word1])
              page2.push([row.img2, row.word2])
              page3.push([row.img3, row.word3])
              page4.push([row.img4, row.word4])
            };
            console.log('page 1 array', page1);

            var num1 = Math.floor((Math.random() * result.rows.length) + 0);
            console.log('num1 =', num1);
            var num2 = Math.floor((Math.random() * result.rows.length) + 0);
            console.log('num2 =', num2);
            var num3 = Math.floor((Math.random() * result.rows.length) + 0);
            console.log('num3 =', num3);
            var num4 = Math.floor((Math.random() * result.rows.length) + 0);
            console.log('num4 =', num4);

            set1 = page1[num1];
            console.log('set1 =', set1);
            set2 = page2[num2];
            console.log('set2 =', set2);
            set3 = page3[num3];
            console.log('set3 =', set3);
            set4 = page4[num4];
            console.log('set4 =', set4);

            pages = [set1, set2, set3, set4];
            console.log('pages =', pages);

            //   get 4 random numbers
            //   pick the pair of image and words from each list based on the numbers


          console.log('got pages from db');
          //res.send(result.rows);
          res.send(pages);
        });
    });
    });

module.exports = router;
