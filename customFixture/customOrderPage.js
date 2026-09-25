import {test,expect} from "@playwright/test"

const customOrderTest = test.extend({
    orderLogin: async({page},use)=>{
        await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
        await page.locator("#userEmail").fill("grvsanthosh@gmail.com")
        await page.locator("#userPassword").fill("Kiran@002")
        await page.locator("#login").click()
        await use(page)
    }
})
export {customOrderTest}