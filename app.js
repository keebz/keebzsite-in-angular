var keebzSite = angular.module('keebzSite', ['ngRoute']).run(function($templateCache,$http){
      $http.get('views/Music.html', {cache:$templateCache});
      $http.get('views/Media.html', {cache:$templateCache});
      $http.get('views/Live.html', {cache:$templateCache});
});

keebzSite.config(function ($routeProvider) {
   $routeProvider
      .when('/',
      {
        controller: 'HomeCtrl',
        templateUrl: 'views/Home.html'
      })
      .when('/music',
      {
        controller: 'MusicCtrl',
        templateUrl: 'views/Music.html'
      })
      .when('/media',
      {
        controller: 'MediaCtrl',
        templateUrl: 'views/Media.html'
      })
      .when('/live',
      {
        controller: 'LiveCtrl',
        templateUrl: 'views/Live.html'
      })
 });



var app = angular.module('plunker', [])
