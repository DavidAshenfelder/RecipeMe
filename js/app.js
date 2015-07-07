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
        controller: 'MainController'
      })

      .when('/ingredients', {
        templateUrl: 'views/specs.html',
        controller: 'PageController'
      })

      .when('/recipecollection', {
        templateUrl: 'views/recipes.html',
        controller: 'PageController'
      })

      .when('/recipe', {
        templateUrl: 'views/recipeDetails.html',
        controller: 'PageController'
      })

      .when('/favorites', {
        templateUrl: 'views/favorites.html',
        controller: 'PageController'
      })

      .when('/404', {
        template: "<h1 class='errorMessage'> Sorry, Your're cooking up a page that cannot be found...</h1>"
      })

      .otherwise({
        redirectTo: '/404'
      })
  });
})();

(function(){
  'use strict';

  angular
  .module('pages', [])


  });
