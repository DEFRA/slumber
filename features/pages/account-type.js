const Base = require('../support/base')

class GoogleSearch extends Base {
  constructor (World) {
    super(World, {
      path: '/account-type',
      title: 'What type of account do you want to create?',
      elements: {
        person: { id: 'person' },
        body: { id: 'body' },
        continue: { className: 'button' },
        errors: { className: 'error-summary' }
      }
    })
  }
}

module.exports = GoogleSearch
