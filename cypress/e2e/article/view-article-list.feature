Feature: View Article List

  Scenario: User views the list of articles
    Given I am on the homepage
    When I scroll down
    Then I should see a list of articles
