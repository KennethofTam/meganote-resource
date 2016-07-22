{
  angular.module('meganote')
    .controller('AppController', AppController);

  AppController.$inject = ['$scope', 'AppService'];
  function AppController($scope, AppService) {
    // AppService.get().$promise.then(
    //    items => {
    //      console.log(items);
    //     // $scope.items = items;
    // });

    $scope.items = AppService.query();

  }
}
