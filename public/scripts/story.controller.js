angular.module('phinApp')
       .controller('StoryController', StoryController);


       function StoryController(storyService) {
         console.log('StoryController loaded');
         var ctrl = this;
         ctrl.page1 = storyService.page1;
         ctrl.page2 = storyService.page2;
         ctrl.page3 = storyService.page3;
         ctrl.page4 = storyService.page4;

         console.log('NOW THIS is ctrl.page1', ctrl.page1);


         ctrl.getStory = function() {

           console.log('getting story');

             storyService.getStory().then(
               function(response) {
                 console.log('StoryService response', response);
                 console.log('THIS is storyService.page1', storyService.page1);

             }, function(error){
           console.log('error making request', error);
         });
       };

       console.log('ctrl.page1 after funct:', ctrl.page1);
       console.log('IMG', ctrl.page1[0]);
       console.log('bottom of story.controller.js');
     }
