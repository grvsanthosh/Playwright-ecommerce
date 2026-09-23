import { test } from "@playwright/test"
import { IndexPO } from "../POManager/eventHubPO/IndexPO.js"

const POManager = new IndexPO()
let token = null;
let apiToken = null;

test.beforeAll("api login", async () => {
    await POManager.createRequest()
    token = await POManager.apiLoginPO()

})

test("@APIEventHub testing", async ({ page }) => {
    await page.addInitScript((value) => {
        window.localStorage.setItem('eventhub_token', value)
    }, token)
    await page.goto("https://eventhub.rahulshettyacademy.com/")
    apiToken = await page.evaluate(() => {
        return window.localStorage.getItem('eventhub_token')
    })
    await POManager.apiCreateEventPO(apiToken)
    await POManager.apiEditEventPO(apiToken)
    await POManager.apibookEventPO(apiToken)
    await POManager.apiDeleteBookingPO(apiToken)
})