angular.module('phinApp').config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

       $routeProvider.when('/', {
           templateUrl: 'views/home.html'
         }).when('/home', {
           templateUrl: 'views/home.html'
         }).when('/story', {
           templateUrl: 'views/story.html'
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
