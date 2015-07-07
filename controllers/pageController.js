(function (){
  angular
  .module('recipeMe')
  .controller('PageController', function ($scope, $location, $routeParams) {

    $scope.addSearch = function(){
      $location.path("/recipecollection")
      console.log($scope.ingredients);
      console.log($scope.selected);
      return {
        ingredients: $scope.ingredients,
        timeToCook: $scope.timeToCook
      }
    }
  });
})();
