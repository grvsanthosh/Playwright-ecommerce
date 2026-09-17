import { LoginPagePO } from "./LoginPagePO.js"
import { AddToCartPO } from "./AddToCartPO.js"
import { PlaceOrderPO } from "./PlaceOrderPO.js"
import { OrderValidatorPO } from "./OrderValidatorPO.js"

export class IndexPO {
    constructor(page, data) {
        this.page = page;
        this.data = data;
        this.loginPagePO = new LoginPagePO(this.page)
        this.addToCartPagePO = new AddToCartPO(this.page)
        this.placeOrderPO = new PlaceOrderPO(this.page, this.data)
        this.orderValidatorPO = new OrderValidatorPO(this.page, this.data)
        this.orderId = null;
    }
    async userLogin() {
        await this.loginPagePO.loginAction(this.data);
        await this.loginPagePO.loginValidation();

    }
    async addToCartAction() {
        await this.addToCartPagePO.addToCart(this.data);
        await this.addToCartPagePO.addToCartValidator();
        await this.addToCartPagePO.navToCart();
        await this.addToCartPagePO.cartPageAction();

    }
    async placeOrderAction() {
        await this.placeOrderPO.placingOrderAction()
        await this.placeOrderPO.placeOrderValidator()
        this.orderId = await this.placeOrderPO.getOrderId()
        
    }
    async orderValidator() {
        await this.orderValidatorPO.orderValidation(this.orderId)
        console.log("order validated")
    }
}
