import { test, expect } from "@playwright/test"
let newApiContext;
test.beforeAll("login", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("grvsanthosh@gmail.com")
    await page.locator("#userPassword").fill("Kiran@002")
    await page.locator("#login").click();
    await page.waitForLoadState("networkidle")
    await context.storageState({ path: './storageState/networkLogin.json' })
    newApiContext = await browser.newContext({ storageState: './storageState/networkLogin.json' })
})

test("@network @orderDetail mocking testing", async () => {
    const page = await newApiContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash")
    await page.locator("[routerlink*=myorders]").click();
    
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        async (route) => {
            await route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6a68645f85b8849b491531b3' })
        }
    )
    await page.locator("button.btn",{hasText:"View"}).first().click();

    
    await expect(page.locator('.blink_me')).toBeVisible();
    

})