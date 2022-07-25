Feature: The Internet Guinea Pig Website

   @ModifyThemes
  Scenario Outline: As a user, I can modify the background theme

    Given I am on the searchPage 
    When I click on settings and modify background <theme>
    Then In Home Page the background switch to <color>

      Examples:
        | theme           | color        |
        | Terminal        | #222222      |

  Scenario Outline: As a user, I can modify the language 

    Given I am on the searchPage 
    When I click on all settings, and modify the language to <language>
    Then All settings translated to the new language is <translated>

      Examples:
        | language           |  translated                | 
        | Lietuvių           |  Visi nustatymai           |
   
      