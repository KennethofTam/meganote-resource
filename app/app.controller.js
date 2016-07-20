{
  angular.module('meganote')
    .controller('AppController', AppController);

  AppController.$inject = ['$scope', 'AppService'];
  function AppController($scope, AppService) {
    AppService.getPosts().then( function(items) {
      $scope.items = items;
    });
  }
}
