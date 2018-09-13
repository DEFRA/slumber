const Base = require('../support/base')

class OrgContact extends Base {
  constructor (World) {
    super(World, {
      path: '/org-contact',
      title: 'What are are the organisation contact details?',
      elements: {
        phoneNumber: { id: 'phoneNumber' },
        faxNumber: { id: 'faxNumber' },
        emailAddress: { id: 'emailAddress' },
        continue: { className: 'button' },
        errors: { className: 'error-summary' }
      }
    })
  }
}

module.exports = OrgContact
