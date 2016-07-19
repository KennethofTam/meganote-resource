{
  angular.module('meganote')
    .controller('AppController', AppController);

  AppController.$inject = ['$scope'];
  function AppController($scope) {
    $scope.items = ["a", "b", "c"];
  }
}
