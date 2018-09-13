const driver = require('selenium-webdriver')

class Base {
  constructor (world, options) {
    this.origin = world.origin
    this.browser = world.browser

    this.path = options.path
    this.title = options.title

    // Load page elements
    this.elements = {}
    if (typeof options.elements === 'object') {
      Object.keys(options.elements).forEach(key => {
        const selector = options.elements[key]

        this.elements[key] = async function () {
          return this.browser.findElement(selector)
        }.bind(this)
      })
    }
  }

  get url () {
    return this.origin + this.path
  }

  load () {
    return this.browser.get(this.url)
  }

  waitUntilVisible () {
    return this.browser.wait(driver.until.urlIs(this.url))
  }

  loadAndWaitUntilVisible () {
    return this.load().then(result => {
      return this.waitUntilVisible()
    })
  }

  assertErrors () {
    return this.browser.findElement({ className: 'error-summary' })
  }

  async assertErrorMessage (message) {
    const list = await this.browser.findElement({ className: 'error-summary-list' })
    return this.browser.wait(driver.until.elementTextContains(list, message))
  }

  // Returns a promise that resolves to the element
  // async waitForElement (locator) {
  //   const condition = this.driver.until.elementLocated(locator)
  //   return this.browser.wait(condition)
  // }

  // waitUntilElementIsVisible (locator) {
  //   const element = this.browser.wait(this.until.elementLocated(locator))
  //   return this.browser.wait(this.until.elementIsVisible(element))
  // }
}

module.exports = Base
