Feature: Advantage

  Scenario: Search product
    Given I am on the website
    When search product "tablet"
    Then validate product on screen

  Scenario: Add product to cart
    Given I am on the website
    When search product "tablet"
    And I select the product
    And I add the product to cart
    And I go to shopping cart
    Then validate that the product in the cart

  Scenario: Validate payment screen
    Given I am on the website
    When search product "tablet"
    And I select the product
    And I add the product to cart
    And I go to shopping cart
    And I go to order payment
    Then validate the product is selected in the shopping cart is equal of order payment