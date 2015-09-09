githubUserSearch.factory('Search', ['$http', function($http) {
  var access_token = "&access_token=";
  var queryUrl = "https://api.github.com/search/users";

  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm, access_token: git_access_token
        }
      });
    }
  }
}]);
