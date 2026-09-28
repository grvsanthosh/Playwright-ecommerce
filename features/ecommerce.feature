Feature: Ecommerce validation

    Scenario: Login to ecommerce
        Given Enter login credentials
        When Product added to cart
        Then Place order for the product
        Then Validate the placed order

