Feature: WebdriverUniveristy - validate login page

    Background: Pre conditions Navigate to WebdriverUniversity homepage click on Login Portal
        Given I navigate to the WebdriverUniveristy homepage
        When I click on the Login Portal button


    Scenario Outline: Validate Valid and Invalid Login credentials
        And I type in a user name '<userName>' and a password '<password>'
        Then I click on the Login button
        Then I validate the alert box which contains text '<expectedAlertText>'


        Examples:
            | userName  | password     | expectedAlertText    |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | hello        | validation failed    |
            | hello     | webdriver123 | validation failed    |

