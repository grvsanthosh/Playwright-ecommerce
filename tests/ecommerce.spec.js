/*
ecommerce website - https://rahulshettyacademy.com/client/#/auth/login

1.login, Login Successfully
2.add to cart, goto cart page
3.fill details, place order, get order id and validate orderpage
4. go to order page and validate order placed.

*/

import {test} from "@playwright/test"
import data from "../data/inputData.json" with {type:'json'}
import {IndexPO} from "../POManager/ecommercePO/IndexPO.js"

const inputData = JSON.parse(JSON.stringify(data))

test("@ecommerce Testing",async({page})=>{
    const POManager = new IndexPO(page,inputData);
    await POManager.userLogin();
    await POManager.addToCartAction();
    await POManager.placeOrderAction();
    await POManager.orderValidator();
})
