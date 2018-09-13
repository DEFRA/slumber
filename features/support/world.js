const cucumber = require('cucumber')
const driver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const firefox = require('selenium-webdriver/firefox')
const pages = require('../pages')

class CustomWorld {
  constructor (options) {
    const parameters = options.parameters

    this.origin = parameters.origin || 'http://localhost:3000'
    this.browser = new driver.Builder()
      .forBrowser(parameters.browser || 'chrome')
      .setChromeOptions(new chrome.Options().headless())
      .setFirefoxOptions(new firefox.Options().headless())
      .build()
  }

  createPage (pageName) {
    const PageClass = pages[pageName]

    if (!PageClass) {
      throw new Error(`Page class not found: ${pageName}`)
    }

    return new PageClass(this)
  }
}

cucumber.setWorldConstructor(CustomWorld)
