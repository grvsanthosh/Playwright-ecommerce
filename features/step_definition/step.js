import { Given, When, Then } from '@cucumber/cucumber';
import { IndexPO } from "../../POManager/ecommercePO/IndexPO.js"
import data from "../../data/inputData.json" with {type: 'json'}

const inputData = JSON.parse(JSON.stringify(data))


Given('Enter login credentials', async function () {
    this.POManager = new IndexPO(this.page, inputData)
    await this.POManager.userLogin()
});

When("Product added to cart", async function() {
    await this.POManager.addToCartAction()
})
Then("Place order for the product", async function() {
    await this.POManager.placeOrderAction()
})
Then("Validate the placed order", async function() {
    await this.POManager.orderValidator()
})

