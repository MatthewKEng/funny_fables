angular.module('phinApp')
       .controller('ArtController', ArtController);


  function addArt($http, $location) {
    console.log('RegisterController loaded');
    var ctrl = this;

    ctrl.add = function() {
      console.log('adding new art');
      $http.post('/art', {
        first_name: ctrl.firstName,
        last_name: ctrl.lastName,
        word1: ctrl.word1,
        img1: ctrl.draw1,
        word2: ctrl.word2,
        img2: ctrl.draw2,
        word3: ctrl.word3,
        img3: ctrl.draw3,
        word4: ctrl.word4,
        img4: ctrl.draw4
      }).then(function(){
        $location.path('/thanks');
      }, function(error) {
        console.log('error registering', error);
      });
    };
  }
