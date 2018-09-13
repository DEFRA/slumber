const cucumber = require('cucumber')

cucumber.Before(function (testCase) {
  console.log('Starting', `${testCase.sourceLocation.uri} ${testCase.pickle.name}`)
})

cucumber.After(function () {
  return this.browser.quit()
})
