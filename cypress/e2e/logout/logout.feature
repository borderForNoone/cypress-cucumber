Feature: Logout

  Scenario: User logs out successfully
    Given I am logged in
    When I navigate to the settings page
    And I click the logout button
    Then I should be redirected to the home page
