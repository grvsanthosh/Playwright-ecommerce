import {expect} from "@playwright/test"

export class LoginPagePO {
    constructor(page){
        this.page = page;
        this.userName = this.page.locator("#userEmail");
        this.password = this.page.locator("#userPassword");
        this.loginBtn = this.page.locator("#login")
        this.loginValidate = this.page.getByText("Login Successfully")
    }
    async loginAction(data){
        await this.page.goto(data.ecommerceWeb);
        await this.userName.fill(data.userName);
        await this.password.fill(data.password);
        await this.loginBtn.click();
    }
    async loginValidation(){
        await expect(this.loginValidate).toBeVisible();
    }
}