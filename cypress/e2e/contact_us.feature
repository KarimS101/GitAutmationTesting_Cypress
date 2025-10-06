Feature: WebdriverUniveristy - contact us page

    Scenario: Valid contact us form submission
        Given I navigate to the WebdriverUniveristy homepage
        When I click on the Contact Us button
        When I type in a fist name
        When I type in a last name
        When I type in a valid email address
        When I click on add a comment
        When I click on the submit button
        Then I should be presented with a successful contact us submission message


    Scenario: Ivalid contact us from submission - missing email address
     Given I navigate to the WebdriverUniveristy homepage
        When I click on the Contact Us button
        When I type in a fist name
        When I type in a last name
        When I click on add a comment
        When I click on the submit button
        Then I should be presented with an usuccessful contact us submission message