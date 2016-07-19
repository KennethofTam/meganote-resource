(function() {

  var app = angular.module('meganote', ['ngResource']);

  app.factory('AppService', function($resource) {
    return $resource('',{});
  });

})();
