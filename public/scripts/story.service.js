angular.module('phinApp')
       .service('storyService', StoryService);

       function StoryService($http) {
         console.log('StoryService loaded');
         var ctrl = this;
         ctrl.story = [];
         ctrl.page1 = [];
         ctrl.page2 = [];
         ctrl.page3 = [];
         ctrl.page4 = [];
         //page1 = story[0];

          ctrl.getStory = function() {

            console.log('getting story');

              return $http.get('/story').then(function(response){
                console.log('THIS is response', response);
                console.log('THIS is response.data[0]', response.data[0]);
                ctrl.story = response;
                ctrl.page1 = response.data[0];
                ctrl.page2 = response.data[1];
                ctrl.page3 = response.data[2];
                ctrl.page4 = response.data[3];

                console.log('THIS is ctrl.page1...', ctrl.page1);
                //console.log('page1 = ', page1);
                return response;

                //ctrl.story = response.data

          }, function(error){
            console.log('error making request', error);

      });
      console.log('ctrl.story=', ctrl.story);
    };
}
