
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const login = require('./routes/login');
const art = require('./routes/art');
const story = require('./routes/story');
const approved = require('./routes/approved');
const notApproved = require('./routes/notApproved');
const auth = require('./auth/setup');
const passport = require('passport');
const session = require('express-session');



auth.setup();

const sessionConfig = {
  secret: 'super secret key goes here', // TODO this should be read from ENV
  key: 'user',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 30 * 60 * 1000,
    secure: false
  }
};


// auth.setup();

const app = express();


app.use(session(sessionConfig));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/adminlog', login);
app.use('/art', art);
app.use('/story', story);
app.use('/approved', approved );
app.use('/notApproved', notApproved );


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

// everything beyond this point must be authenticated
app.use(ensureAuthenticated);


app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.sendStatus(401);
  }
}

var server = app.listen(3000, function() {
  console.log('Listening on port', server.address().port);
});
