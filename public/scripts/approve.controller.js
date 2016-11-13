angular.module('phinApp')
        .controller('ApproveController', ApproveController);

function ApproveController($http, $location) {
  console.log('ApproveController loaded');
  var ctrl = this;

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

        $http.put('/approved', ctrl.response[index]).then(function(){
          console.log('updated status in db');
        },  function(error){
          console.log('error making request', error);
        });
        ctrl.getPend();
        ctrl.getPend();
    };





    ctrl.notApprovStuff = function(index) {

      console.log('did not approve pending art');

      $http.put('/notApproved', ctrl.response[index]).then(function(){
          console.log('updated status in db');
            }, function(error){
              console.log('error making request', error);
            });
              ctrl.getPend();
              ctrl.getPend();
          };

}
