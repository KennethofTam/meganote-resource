(function() {

  var app = angular.module('app', ['ngResource']);

  app.factory('appFactory', function($resource) {
    return $resource('',{});
  });

})();
