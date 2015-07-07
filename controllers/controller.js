(function () {
  'use strict';
      angular
      .module('recipeMe')
      .controller('MainController', function ($scope, $rootScope, $location, $routeParams) {

        $rootScope.newUsername = function(){
          $rootScope.username = $scope.username
          $scope.username = null
          $location.path('/ingredients')
          return {
            username: $rootScope.username
          }
        }
    });
})();
