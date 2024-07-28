Feature: View Popular Tags

  Scenario: User views popular tags
    Given I am logged in
    When I click on a random popular tag
    Then I should see articles with the clicked tag
