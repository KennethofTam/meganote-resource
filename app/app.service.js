(function() {

  angular.module('meganote', ['ngResource'])
    .factory('AppService', AppService);

    AppService.$inject = ['$http'];

    function AppService ($http) {
    const apiURI = `http://bluitx.herokuapp.com/posts.json`;

    const service = {
      getPosts: getPosts
    }

    return service;

    function getPosts(){
      const posts = $http.get(apiURI);
      //$resource(,{});
      return posts;
    }

    ///


  }

})();
