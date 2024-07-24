Feature: User Login

  Scenario: User logs in with valid credentials
    Given I am on the login page
    And I have an account
    When I enter valid credentials
    And I submit the login form
    Then I should be redirected to the homepage
