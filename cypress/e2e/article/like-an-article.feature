Feature: Like an Article

  Scenario: User likes an article
    Given the user is logged in
    When the user navigates to the "Global Feed" page
    And the user clicks on the first article
    And the user clicks the "Like" button on the article
    Then the number of likes on the article should increase by one
