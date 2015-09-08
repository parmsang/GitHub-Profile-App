githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var self = this;
  var searchResource = $resource('https://api.github.com/search/users');

  self.doSearch = function (){
    self.searchTerm;
    self.searchResult = searchResource.get(
      { q: self.searchTerm }
    );
  };

}]);
