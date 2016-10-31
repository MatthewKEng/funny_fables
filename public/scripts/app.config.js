angular.module('phinApp')
       .config(function($routeProvider, $locationProvider) {
         $routeProvider.when('/', {
           templateUrl: 'views/home.html'
         }).when('/home', {
           templateUrl: 'views/home.html'
         }).when('/story', {
           templateUrl: 'views/story.html'
         }).when('/contrib', {
           templateUrl: 'views/contrib.html'
         }).when('/thanks', {
           templateUrl: 'views/thanks.html'
         }).when('/adminlog', {
           templateUrl: 'views/adminlog.html'
         });

         // lets us use normal looking links
         // i.e. /home
         // remember, to use this, need to set base href in html
         $locationProvider.html5Mode(true);
       });
