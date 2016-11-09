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
          console.log('response', response.data);
          ctrl.response=response.data;
          console.log('ctrl.pends = ', ctrl.response);

    }, function(error){
      console.log('error making request', error);
    });
  };

  ctrl.approvStuff = function(index) {

    console.log('index', ctrl.response[index]);

      $http.put('/art', ctrl.response[index]).then(function(){
          console.log('updated status in db');
          

  },
   function(error){
    console.log('error making request', error);
  });
  };

//   ctrl.notApprovStuff = function() {
//
//     console.log('did not approve pending art');
//
//       $http.put('/art').then(function(response){
//         console.log('response', response.data);
//         ctrl.response=response.data;
//         console.log('ctrl.pends = ', ctrl.response);
//
//   }, function(error){
//     console.log('error making request', error);
//   });
// };


}
