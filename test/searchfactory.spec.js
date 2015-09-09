describe('factory: Search', function() {

  var search;

  var items = [
    {
      "login": "tansaku",
      "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
      "html_url": "https://github.com/tansaku"
    },
    {
      "login": "stephenlloyd",
      "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
      "html_url": "https://github.com/stephenlloyd"
    }
  ];

  beforeEach(module('GitUserSearch'));

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend
    httpBackend
      .when("GET", "https://api.github.com/search/users?access_token=" + git_access_token + "&q=ajitsy"  )
      .respond(
        items
      );
  }));

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  it('responds to query', function() {
    expect(search.query).toBeDefined();
  });

  it('returns search results', function() {
    search.query('ajitsy')
      .then(function(response) {
        expect(response.data).toEqual(items)
      })
     httpBackend.flush();
  })

});
