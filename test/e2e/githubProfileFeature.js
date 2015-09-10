describe('GitHub profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds profiles', function() {

    searchBox.sendKeys('spike');
    searchButton.click();

    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.get(1).getText()).toEqual('spike01'); //This won't pass!
  });

  // it('finds profiles', function() {
  //   element(by.model('searchCtrl.searchTerm')).sendKeys('spike01');
  //   element(by.className('btn')).click();
  //   expect(element(by.binding('user.login')).getText()).toEqual('spike01');
  // });

});
