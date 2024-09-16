Feature: Auth

    Scenario: i give auth
        Given that I log in with the user
        When the response code states should be 200
        Then I validate the success message in the response "Login Successful"