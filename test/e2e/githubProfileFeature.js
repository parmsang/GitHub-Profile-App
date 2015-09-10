var mock = require('protractor-http-mock');

describe('GitHub profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function() {
    mock(['githubUserSearch.js']);
  });

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });



  xit('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  xit('finds the last Spike', function() {
    searchBox.sendKeys('spike01');
    searchButton.click();

    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.last().getText()).toEqual('spike01');
  });

  xit('counts the number of spikes', function() {
    searchBox.sendKeys('spike');
    searchButton.click();
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(element.all(by.repeater('user in searchCtrl.searchResult.items')).count()).toEqual(30);

  });

  it('initialises with an empty search result and term', function() {
    expect(element(by.model('searchCtrl.searchTerm')).getText()).toEqual('');
    expect(element.all(by.repeater('searchCtrl.searchResult.items')).count()).toEqual(0);

  });

  it('displays search results', function() {
    expect(element.all(by.repeater('searchCtrl.searchResult.items')).count()).toEqual(0);
    element(by.model('searchCtrl.searchTerm')).sendKeys('ptolemybarnes');
    element(by.className('btn')).click();
    expect(element.all(by.repeater('searchCtrl.searchResult.items')).count()).toBeGreaterThan(0);

  });

  afterEach(function(){
    mock.teardown();
  });

  //
  //
  // it('finds profiles', function() {
  //
  //   searchBox.sendKeys('spike');
  //   searchButton.click();
  //
  //   var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
  //   expect(profiles.get(1).getText()).toEqual('spike01'); //This won't pass!
  // });

  // it('finds profiles', function() {
  //   element(by.model('searchCtrl.searchTerm')).sendKeys('spike01');
  //   element(by.className('btn')).click();
  //   expect(element(by.binding('user.login')).getText()).toEqual('spike01');
  // });

});
