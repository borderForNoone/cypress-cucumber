Feature: Create Article

  Scenario: User creates a new article
    Given I am logged in
    When I click on "New Article"
    And I fill in the article form
    And I submit the form
    Then I should see the article page
