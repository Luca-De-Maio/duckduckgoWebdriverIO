Feature: Test API DuckduckGo

    Scenario Outline: Print images 
        Given I will print <search> results
        When I perform <search> api search
        Then I print image 

        Examples: 
            | search       | 
            | dogs         |

    Scenario Outline: Print urls 
        Given I will print <search> results
        When I perform <search> api search
        Then I print urls 

        Examples: 
            | search       | 
            | dogecoin     |

