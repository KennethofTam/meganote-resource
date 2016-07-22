(function() {

  angular.module('meganote')
    .factory('AppService', AppService);

    AppService.$inject = ['$http', '$resource'];

    function AppService ($http, $resource) {
      const apiURI = `http://bluitx.herokuapp.com/posts.json`;
      return $resource(apiURI);
  }


})();
