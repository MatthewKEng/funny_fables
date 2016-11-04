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

    ctrl.getPend = function() {

      console.log('populating pending art');

    $http.get('/art').then(function(response){
      console.log('response', response.data.img1);
      ctrl.word1 = response.data.word1;
      ctrl.img1 = response.data.img1;
      ctrl.word2 = response.data.word2;
      ctrl.img2 = response.data.img2;
      ctrl.word3 = response.data.word3;
      ctrl.img3 = response.data.img3;
      ctrl.word4 = response.data.word4;
      ctrl.img4 = response.data.img4;

      console.log('ctrl.word1 = ', ctrl.word1);
      console.log('ctrl.img1 = ', ctrl.img1);

    }, function(error){
      console.log('error making request', error);
    });
  };

}
