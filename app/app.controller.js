{
  angular.module('meganote')
    .controller('AppController', AppController);

  AppController.$inject = ['$scope', 'AppService'];
  function AppController($scope, AppService) {
    $scope.items = AppService.query();

  }
}
