const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

exports.setup = function () {
  console.log('setting up passport');
  // passport configuration

  // when someone asks for the 'local' strategy,
  // use the following information from the request
  // and the findAndComparePassword function to validate
  passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, findAndComparePassword));

  // converts a user to a user id
  passport.serializeUser(function(user, done){
    done(null, user.id);
  });

  // converts a user id to a user
  passport.deserializeUser(function(id, done){
    User.findById(id).then(function(user){
      done(null, user);
    }).catch(function(err){
      done(err);
    });
  });

};

function findAndComparePassword(username, password, done){
  console.log('in findAndComparePassword');
  // look up the user by their username
  User.findByUsername(username).then(function(user){
    if(!user) {
      // did not find a user, not a successful login
      console.log('did not find a user');
      return done(null, false);
    }

    // compare the password
    User.comparePassword(user, password).then(function(isMatch){
      console.log('user =', user);
      console.log('password =', password);
      console.log('isMatch =', isMatch);
      if (isMatch) {
        done(null, user);
      } else {
        done(null, false);
      }
    }).catch(function(err){
      console.log('Error comparing password', err);
      done(err);
    });

  }).catch(function(err){
    console.log('Error finding user', err);
    done(err);
  });
}
