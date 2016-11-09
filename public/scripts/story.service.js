angular.module('phinApp')
       .service('storyService', StoryService);

       function StoryService($http) {
         console.log('StoryService loaded');
         var ctrl = this;
         //ctrl.story = [];

          ctrl.getStory = function() {

            console.log('getting story');

              return $http.get('/story').then(function(response){
                console.log('response', response);
                console.log('response.data[0]', response.data[0]);
                page1 = response.data[0];
              
                return page1;
                //ctrl.story = response.data

          }, function(error){
            console.log('error making request', error);
      });
    };
}
