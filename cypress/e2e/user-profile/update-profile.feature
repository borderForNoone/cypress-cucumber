Feature: Update User Profile

  Scenario: User updates their profile but the update does not reflect
    Given the user is logged in
    When the user navigates to the settings page
    And the user attempts to update their profile
    Then the profile information should remain unchanged
    And no unexpected errors should occur during the update
