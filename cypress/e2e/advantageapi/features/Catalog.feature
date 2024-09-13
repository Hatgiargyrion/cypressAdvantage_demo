Feature: Catalog

        Scenario: Consult product with sucess
                Given I consult the product "tab" and quantity per each category "15"
                When the response code states should be 200
                Then the response body should contain value "TABLETS"