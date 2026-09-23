import {expect} from "@playwright/test"
import {customTest} from "../customFixture/customGreenCart.js"

customTest("test using @customFixture",async({login,credentials})=>{
    await login.locator("a.cart-icon").click();
    await login.getByRole('button',{name:'PROCEED TO CHECKOUT'}).click();
    await login.getByRole('button',{name:'Place Order'}).click();
    console.log("placed order :",credentials.name)
})