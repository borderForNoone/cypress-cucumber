Feature: Edit Article

  Scenario: User edits an article
    Given I have an article
    When I edit the article
    Then I should see the updated article
