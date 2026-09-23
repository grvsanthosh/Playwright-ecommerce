import { request, expect } from "@playwright/test"
export class APILoginPO {
    constructor() {

    }
    async loginWithAPI(apiContext) {

        const response = await apiContext.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login", {
            data: {
                email: "grvsanthosh@gmail.com",
                password: "Kiran@002"
            },
            headers: {
                "content-Type": "application/json"
            }
        })
        expect(response.ok()).toBeTruthy();
        const responseJSON = await response.json();
        const token = responseJSON.token;
        return token

    }
}