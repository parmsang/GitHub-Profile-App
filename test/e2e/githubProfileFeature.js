describe('GitHub profile finder', function() {
  it('finds profiles', function() {
    browser.get('http://localhost:8080');

    element(by.model('searchTerm')).sendKeys('spike01');
    element(by.className('btn')).click();

    expect(element(by.binding('user.login')).getText()).
        toEqual('spike01');
  });
});
