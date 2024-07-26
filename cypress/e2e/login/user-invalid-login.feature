Feature: Login

  Scenario: Login with invalid credentials
    Given I am on the login page
    When I enter invalid username and password
    And I click on the login button
    Then I should see an error message "email or password is invalid"
