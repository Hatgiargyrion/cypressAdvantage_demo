Feature: Catalog

        Scenario: Consult product with sucess
        Given I consult the product "tab" and quantity per each category "15"
        When the response code states should be 200
        Then the response body should contain value "TABLETS"

        Scenario: Upload new image product
        Given that I log in with the user
        And the response code states should be 200
        And I use the parameters of "uploadNewImageParams.json"
        When I upload new image
        And I consult the product by id 9
        Then I verify that the product was updated successfully

        Scenario: Consult product with sucess by id
        Given I consult the product by id 12
        When the response code states should be 200
        Then the response body must contain the id of the product queried