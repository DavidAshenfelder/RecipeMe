(function(){
  'use strict';

  angular
  .module('recipeMe', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landingPage.html',
        controller: 'LandingController'
      })

      .when('/ingredients', {
        templateUrl: 'views/specs.html',
        controller: 'pageController'
      })

      .when('/recipes', {
        templateUrl: 'views/recipes.html',
        controller: 'pageController'
      })

      .when('/header', {
        templateUrl: 'views/header.html',
        controller: 'pageController'
      })

      .when('/404', {
        template: "<h1 class='errorMessage'> Sorry, Your're cooking up a page that cannot be found...</h1>"
      })

      .otherwise({
        redirectTo: '/404'
      })
  });




})();
