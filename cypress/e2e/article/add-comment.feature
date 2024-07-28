Feature: Add Comment

  Scenario: User adds a comment to an article
    Given I am logged in
    And I am viewing an article
    When I add a comment
    And I submit the comment
    Then I should see my comment
