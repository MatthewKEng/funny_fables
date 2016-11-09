angular.module('phinApp').config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

       $routeProvider.when('/', {
           templateUrl: 'views/home.html',
           controller: 'StoryController as story'
         }).when('/home', {
           templateUrl: 'views/home.html',
           controller: 'StoryController as story'
         }).when('/storystart', {
           templateUrl: 'views/storystart.html',
           controller: 'StoryController as story'
         }).when('/story1', {
           templateUrl: 'views/story1.html',
           controller: 'StoryController as story'
         }).when('/story2', {
           templateUrl: 'views/story2.html',
           controller: 'StoryController as story'
         }).when('/story3', {
           templateUrl: 'views/story3.html',
           controller: 'StoryController as story'
         }).when('/story4', {
           templateUrl: 'views/story4.html',
           controller: 'StoryController as story'
         }).when('/storyend', {
           templateUrl: 'views/storyend.html',
           //controller: 'StoryController as art'
         }).when('/contrib', {
           templateUrl: 'views/contrib.html',
           controller: 'ArtController as art'
         }).when('/thanks', {
           templateUrl: 'views/thanks.html'
         }).when('/adminlog', {
           templateUrl: 'views/adminlog.html',
           controller: 'LoginController as login'
         }).when('/approval', {
           templateUrl: 'views/approval.html',
           controller: 'LoginController as login'
         });

         // lets us use normal looking links
         // i.e. /home
         // remember, to use this, need to set base href in html
         $locationProvider.html5Mode(true);
       });
