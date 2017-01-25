angular.module('phinApp')
        .controller('LoginController', LoginController);

function LoginController($http, $location) {
  console.log('LoginController loaded');
  var ctrl = this;


   ctrl.login = function() {

     console.log('logging in');
    $http.post('/adminlog', {
      username: ctrl.username,
      password: ctrl.password
    }).then(function(){
      $location.path('/approval');
    }, function(error) {
      console.log('error login in', error);
      console.log('ctrl.username', ctrl.username);
      console.log('ctrl.password', ctrl.password);
    });

  };
    
}
