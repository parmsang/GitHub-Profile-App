exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['githubProfileFeature.js'], // name of feature

  mocks: {
    default: [],
    dir: 'mocks' // default value: 'mocks'
  },

  onPrepare: function() {
    require('protractor-http-mock').config = {
      rootDirectory: __dirname, // default value: process.cwd()
      protractorConfig: 'conf.js' // default value: 'protractor.conf'
    };
  }

}
