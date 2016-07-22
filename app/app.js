(function() {
  var app = angular.module('meganote', [
    'ui.router',
    'ngResource'
  ]);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/notes');
    $stateProvider
      .state('notes', {
        url: '/notes',
      });
  }

  config['$inject'] = ['$stateProvider', '$urlRouterProvider'];
  app.config(config);
})();
