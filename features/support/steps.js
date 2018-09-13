const { Given, Then, When } = require('cucumber')

/* All step definitions are loaded (and defined) before Cucumber
starts to execute the plain text in the feature file.
Once execution begins, for each step, Cucumber will look
for a registered step definition with a matching Regexp.
If it finds one, it will execute it, passing all capture
groups and variables from the Regexp as arguments to the method or function. */

Given('I am logged in', function () {
  const loginPage = this.createPage('login')
  return loginPage.load()
})

Given(/^.*I have chosen the '(person|body)' journey$/, async function (journey) {
  this.page = this.createPage('account type')
  await this.page.loadAndWaitUntilVisible()
  const radio = await this.page.elements[journey]()
  await radio.click()
  const button = await this.page.elements.continue()
  return button.click()
})

Given(/^.*I have navigated to the '([^"]*)' page$/, function (pageName) {
  this.page = this.createPage(pageName)
  return this.page.loadAndWaitUntilVisible()
})

When(/^.*I select the '([^"]*)' radio button$/, async function (name) {
  const el = await this.page.elements[name]()
  return el.click()
})

When(/^.*I enter '([^"]*)' in the '([^"]*)' field$/, async function (value, name) {
  const el = await this.page.elements[name]()
  return el.sendKeys(value)
})

When('I click continue', async function () {
  const el = await this.page.elements.continue()
  return el.click()
})

Then('I get the error page', async function () {
  await this.page.waitUntilVisible()
  return this.page.assertErrors()
})

Then(/^I get the error message '([^"]*)'$/, async function (error) {
  await this.page.waitUntilVisible()
  await this.page.assertErrors()
  return this.page.assertErrorMessage(error)
})

Then(/^I go to the '([^"]*)' page$/, function (pageName) {
  const nextPage = this.createPage(pageName)
  const result = nextPage.waitUntilVisible()
  this.page = nextPage
  return result
})

Then(/^I ([^"]*) expect to see the CRN field$/, function (value) {
  if (value === 'do') {
    return this.page.assertCRNPresence(true)
  } else if (value === 'do not') {
    return this.page.assertCRNPresence(false)
  }
})
