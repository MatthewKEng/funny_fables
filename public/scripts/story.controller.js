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
               //console.log('response = ', response);
               function(response) {
                 console.log('StoryService response', response);
                 console.log('THIS is storyService.page1', storyService.page1);
                 //console.log('Yay! This is page1', page1);
                //  ctrl.page1 = response.data[0];
                //  ctrl.page2 = response.data[1];
                //  ctrl.page3 = response.data[2];
                //  ctrl.page4 = response.data[3];

                 //ctrl.page1 = response;
                 //console.log('ctrl.page1[0]=', ctrl.page1[0]);
                 //console.log('ctrl.page1[1]=', ctrl.page1[1]);

              //  ctrl.img1=response.data.img1;
              //  ctrl.word1=response.data.word1;
              //  ctrl.img2=response.data.img2;
              //  ctrl.word2=response.data.word2;
              //  ctrl.img3=response.data.img3;
              //  ctrl.word3=response.data.word3;
              //  ctrl.img4=response.data.img4;
              //  ctrl.word4=response.data;
               //console.log('ctrl.pends = ', ctrl.response);

             }, function(error){
           console.log('error making request', error);
         });
       };
       //console.log('This IS page1:', page1);
       console.log('ctrl.page1 after funct:', ctrl.page1);
       console.log('IMG', ctrl.page1[0]);


       console.log('bottom of story.controller.js');
     }
