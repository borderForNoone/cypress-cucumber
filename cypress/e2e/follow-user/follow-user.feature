Feature: Follow User

  Scenario: User follows another user
    Given I am logged in
    And I am viewing another user's profile
    When I click the "Follow" button
    Then I should see the "Unfollow" button