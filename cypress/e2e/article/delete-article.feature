Feature: Delete Article

  Scenario: User deletes an article
    Given I am logged in
    And I have created an article
    When I click on "Delete Article"
    Then I should no longer see the article