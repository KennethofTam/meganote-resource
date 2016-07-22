(function() {

  angular.module('meganote')
    .factory('AppService', AppService);

    AppService.$inject = ['$http', '$resource'];

    function AppService ($http, $resource) {
      const apiURI = `http://bluitx.herokuapp.com/posts.json`;
      return $resource(apiURI);


      // return service;

    //   const posts = $http.get(apiURI);
    //   for(var i = 0; i < posts.length; i++) {
    //     console.log(i);
    //   }
    //
    //   //$resource(,{});
    //   return posts;

    // function getPosts(){
    //    var posts = ngResource(apiURI) // {userID:'@id'});
    //    return post;
    // }
  }


})();
