const pool = require('../db/connection');

function create(username, password) {
  return new Promise(function(resolve, reject){
    bcrypt.hash(password, SALT_ROUNDS, function(err, hash){
      if (err) {
        console.log('Error hashing password', err);
        return reject(err);
      }

      pool.connect(function(err, client, done){
        if (err) {
          done();
          return reject(err);
        }

        client.query('INSERT INTO art (first_name, last_name, img1, img2, img3, img4, word1, word2, word3, word4) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
                     [username, hash],
                     function(err, result){
                       done();
                       if (err) {
                         return reject(err);
                       }

                       resolve(result.rows[0]);
                     });
      });
    });
  });
}
