angular.module('phinApp')
       .controller('ArtController', ArtController);


  function ArtController($http, $location) {
    console.log('ArtController loaded');
    var ctrl = this;
    var pend = "pending";


    ctrl.add = function(form) {
      console.log('adding new art');

      ctrl.submitted=true;
        if (form.$invalid) {
          console.log('invalid form');
          return;
        }
        console.log('valid form');

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

      }, function(error) {
        console.log('error registering', error);
      })

    };

  }
