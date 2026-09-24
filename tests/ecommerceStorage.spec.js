import { test, expect } from "@playwright/test"

let newLoginContext;
test.beforeAll("test using storageState", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    await page.locator("#userEmail").fill("grvsanthosh@gmail.com")
    await page.locator("#userPassword").fill("Kiran@002")
    await page.locator("#login").click();
    await page.waitForLoadState("networkidle")
    await context.storageState({ path: './storageState/loginData.json' })
    newLoginContext = await browser.newContext({ storageState: './storageState/loginData.json' })
})

test("@storageState testing", async () => {
    const page = await newLoginContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash")
    await page.locator("[routerlink*=myorders]").click();
    await expect(page.getByText("6ab37f972be7a4bc2b653e48")).toBeVisible();
})