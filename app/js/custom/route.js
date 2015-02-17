var funspots = angular.module('funspots', ['ngRoute'])
  .config( ['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){
    // $locationProvider.html5Mode(true);
    $routeProvider


    //indexpage route
    .when('/', {
      templateUrl : 'templates/home.html',
      controller : 'homeCtrl'
    })

    //homepage route
    .when('/home', {
      templateUrl : 'templates/home.html',
      controller : 'homeCtrl'
    })

    //hotspots list page route
    .when('/list', {
      templateUrl : 'templates/list.html',
      controller : 'listCtrl'
    })

    //contactPage route
    .when('/form', {
      templateUrl : 'templates/form.html',
      controller : 'formCtrl'
    })

    //contactPage route
    .when('/help', {
      templateUrl : 'templates/intro.html',
      controller : 'formCtrl'
    }).

    //homePage route
    otherwise({
      redirectTo: '/'
    });
  }]);
