(function () {
  'use strict';
  angular
    .module('RecipeMe')
    .factory('APIService', function ($http) {
      var url =
      var getRecipies = function() {
        return $http.get(url)

      };
      var getSingleRecipe = function (id) {
        return $http.get(url + '/' + id);
      };
      return {
        read: getRecipies,
        readOne: getSingleRecipe,
      }
    });


})();
