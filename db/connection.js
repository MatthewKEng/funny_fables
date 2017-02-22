const pg = require('pg');

var config = {
  // database: 'solo'
  user: 'oyhrtdssihsime',
  database: 'd5s56frcplpjbg',
  password: 'cae7e6841d2825fdef29185ffc59c819689d2b7b03033b66d1733edf0c4907de',
  host: 'ec2-23-21-224-106.compute-1.amazonaws.com',
  ssl: true,
  port: 5432,
  max:10,
  idleTimeoutMillis: 30000,
};

var pool = new pg.Pool(config);

module.exports = pool;
