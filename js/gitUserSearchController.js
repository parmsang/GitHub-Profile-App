githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var self = this;
  var searchResource = $resource('https://api.github.com/search/users');
  var access_token = "&access_token=";

  self.doSearch = function (){
    self.searchTerm;
    self.searchResult = searchResource.get(
      { q: self.searchTerm, access_token: git_access_token  }
    );
  };

}]);
