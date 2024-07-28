Feature: User Invalid Password Login
  As a user
  I want to see an error message when I try to log in with a blank password
  So that I am informed of the issue

  Scenario: User tries to log in with a blank password
    Given I am on the login page
    When I enter a valid email and a blank password
    And I click on the login button
    Then I should see an error message "password can't be blank"
