Feature: User Registration

  Scenario: User registers with valid details
    Given I am on the registration page
    When I fill in the registration form with valid details
    And I submit the registration form
    Then I should see my username in the top right corner
