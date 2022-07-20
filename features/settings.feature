Feature: The Internet Guinea Pig Website

   @ModifyThemes
  Scenario Outline: As a user, I can Modify 

    Given I am on the searchPage 
    When I click on settings and modify background <theme>
    Then In Home Page the background switch to <color>

      Examples:
        | theme           | color        |
        | Terminal        | #222222      | 
      