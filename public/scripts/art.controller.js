angular.module('phinApp')
       .controller('ArtController', ArtController);


  function ArtController($http, $location) {
    console.log('ArtController loaded');
    var ctrl = this;
    var pend = "pending";

    ctrl.add = function() {
      console.log('adding new art');
      $http.post('/art', {
        firstName: ctrl.firstName,
        lastName: ctrl.lastName,
        word1: ctrl.word1,
        draw1: ctrl.draw1,
        word2: ctrl.word2,
        draw2: ctrl.draw2,
        word3: ctrl.word3,
        draw3: ctrl.draw3,
        word4: ctrl.word4,
        draw4: ctrl.draw4,
        pend: pend
          }).then(function(){
        $location.path('/thanks');
        //console.log('response=', response);
        //add function to display the above info on approval.html upon submit, part of add function//
      }, function(error) {
        console.log('error registering', error);
      })

    };






  }
