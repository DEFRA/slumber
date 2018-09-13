Feature: Org contact page tests

  Scenario: Input full contact info and continue
    Given I am logged in
      And I have chosen the 'body' journey
      And I have navigated to the 'org contact' page
    When I enter '01234 567 890' in the 'phoneNumber' field
      And I enter '01234 567 899' in the 'faxNumber' field
      And I enter 'dave@dhl.com' in the 'emailAddress' field
      And I click continue
    Then I go to the 'summary' page

  Scenario: Input just email contact info and continue
    Given I am logged in
      And I have chosen the 'body' journey
      And I have navigated to the 'org contact' page
    When I enter 'dave@dhl.com' in the 'emailAddress' field
      And I click continue
    Then I go to the 'summary' page

  Scenario: Input nothing and continue
    Given I am logged in
      And I have chosen the 'body' journey
      And I have navigated to the 'org contact' page
    When I click continue
    Then I go to the 'summary' page

  Scenario: Input invalid email address and continue
    Given I am logged in
      And I have chosen the 'body' journey
      And I have navigated to the 'org contact' page
    When I enter 'WhatsAllThisThen?' in the 'emailAddress' field
      And I click continue
    Then I get the error page
      And I get the error message 'Please enter a valid email address'