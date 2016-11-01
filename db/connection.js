const pg = require('pg');

var config = {
  database: 'solo'
};

var pool = new pg.Pool(config);

module.exports = pool;
