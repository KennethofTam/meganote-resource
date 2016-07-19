(function() {
  var app = angular.module('meganote', [
    'ui.router',
    'ngResource'
  ]);

  function config($stateProvider, $urlRouterProvider, $resourceProvider) {

    // var posts = $resource('/user/:userId', {userId:'@id'});
    // var post = posts.get({userId:123}, function() {
    //   post.$save();
    // });

    $urlRouterProvider.otherwise('/notes');

    $stateProvider

      .state('notes', {
        url: '/notes',
        template: '<h1>Meganote</h1><p>{{ message }}</p>',
        controller: function($scope) {
          $scope.message = "Welcome to Meganote!";
        }
      });
  }

  config['$inject'] = ['$stateProvider', '$urlRouterProvider', '$resourceProvider'];
  app.config(config);
})();
