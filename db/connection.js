// const pg = require('pg');
//
// var config = {
//
//   // user: Meng,
//   user: 'oyhrtdssihsime',
//   database: 'd5s56frcplpjbg',
//   password: 'cae7e6841d2825fdef29185ffc59c819689d2b7b03033b66d1733edf0c4907de',
//   host: 'ec2-23-21-224-106.compute-1.amazonaws.com',
//   ssl: true,
//   port: 5432,
//   uri: 'oyhrtdssihsime:cae7e6841d2825fdef29185ffc59c819689d2b7b03033b66d1733edf0c4907de@ec2-23-21-224-106.compute-1.amazonaws.com:5432/d5s56frcplpjbg',
//   cli: 'heroku pg:psql postgresql-metric-41411 --app funnyfables',
//   max:10,
//   idleTimeoutMillis: 300000,
// };
//
// var pool = new pg.Pool(config);
//
// module.exports = pool;


const pg = require('pg');

// var config = {
//   database : 'slogans'
// };

const url = require('url')

const params = url.parse('postgres://oyhrtdssihsime:cae7e6841d2825fdef29185ffc59c819689d2b7b03033b66d1733edf0c4907de@ec2-23-21-224-106.compute-1.amazonaws.com:5432/d5s56frcplpjbg');
console.log('params', params);
const auth = params.auth.split(':');
console.log('auth', auth);

var config = {

      user: auth[0],
      password: auth[1],
      host: params.hostname,
      port: params.port,
      database: params.pathname.split('/')[1],
      ssl: true


};
console.log('config', config);

var pool = new pg.Pool(config);

module.exports = pool;
