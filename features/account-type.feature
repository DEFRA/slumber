Feature: Account type page tests

  Scenario: Select person radio button and continue
    Given I am logged in
      And I have navigated to the 'account type' page
    When I select the 'person' radio button
      And I click continue
    Then I go to the 'person name' page

  Scenario: Select body radio button and continue
    Given I am logged in
      And I have navigated to the 'account type' page
    When I select the 'body' radio button
      And I click continue
    Then I go to the 'org person name' page

  Scenario: Select nothing and continue
    Given I am logged in
      And I have navigated to the 'account type' page
    When I click continue
    Then I get the error page
      And I get the error message 'Select an option'
