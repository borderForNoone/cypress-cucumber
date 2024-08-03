Feature: User Invalid Email Login
  As a user
  I want to see an error message when I try to log in with a blank email
  So that I am informed of the issue

  Scenario: User tries to log in with a blank email
    Given I am on the login page
    When I enter a blank email and a valid password
    And I click on the login button
    Then I should see an error message "email can't be blank"
