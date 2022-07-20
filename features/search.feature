Feature: Search for Michael Jordan

  Scenario Outline: As a user, I can search for the GOAT

    Given I am on the searchPage 
    When I search for <searchText>
    Then In the result page should see at least a result with the name <message>
    Then In the result page should see at least an image of the searched player
    Then In the result page should at least appear an NBA result page

    Examples:
      | searchText      | message                        | 
      | Michael Jordan  | Michael Jordan - Wikipedia     |