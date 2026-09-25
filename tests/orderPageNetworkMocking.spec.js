import {test,expect} from "@playwright/test"
import {customOrderTest} from "../customFixture/customOrderPage.js"
let body = {data:[],message:"No Orders"}
customOrderTest("@network @orderPage testing",async({orderLogin})=>{
    await orderLogin.goto("https://rahulshettyacademy.com/client/#/dashboard/dash")
    await orderLogin.route("**/api/ecom/order/get-orders-for-customer/*",
        async (route)=>{
            await route.fulfill({
                body:JSON.stringify(body)
            })
        }
    )
    await orderLogin.locator("[routerlink*='myorders']").click();
    // await orderLogin.waitForResponse("**/api/ecom/order/get-orders-for-customer/*")
    await expect(orderLogin.getByText("You Have No Orders")).toBeVisible();
})