@contact-us @regression
Feature: WebdriverUniveristy - contact us page

    Background: Pre conditions Navigate to WebdriverUniversity homepage and click contact Us button
        Given I navigate to the WebdriverUniveristy homepage
        When I click on the Contact Us button

    Scenario: Valid contact us form submission
        When I type in a fist name
        When I type in a last name
        When I type in a valid email address
        When I click on add a comment
        When I click on the submit button
        Then I should be presented with a successful contact us submission message

 
    Scenario: Ivalid contact us from submission - missing email address
        When I type in a fist name
        When I type in a last name
        When I click on add a comment
        When I click on the submit button
        Then I should be presented with an usuccessful contact us submission message

    Scenario: Valid contract us form submission - using specific data

        And I type a specific first name "Sarah"
        And I type a specific Last name "Woods"
        And I type a specific Email Address "sarah_woods101@mail.com"
        And I type a specific word "hello 123" and number 6788 within the commment input field
        When I click on the submit button
        Then I should be presented with a successful contact us submission message

   @smoke
    Scenario Outline: Validate contact us page
        And I type in a first name '<firstName>' and a last name '<lastName>'
        And I type an email address '<emailAddress>' and a comment '<comment>'
        When I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress   | comment              | message                      |
            | John      | Jones    | john@mail.com  | hello how are you    | Thank You for your Message!  |
            | Mia       | Carter   | MC123@mail.com | Test 1234            | Thank You for your Message!  |
            | Dave      | Jones    | daveJones      | This should not work | Error: Invalid email address |
