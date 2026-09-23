import { request } from "@playwright/test"
import { APILoginPO } from "./APILoginPO.js"
import { APIcreateEventPO } from "./APIcreateEventPO.js"
import { APIeditEventPO } from "./APIeditEventPO.js"
import { APIbookEventPO } from "./APIbookEventPO.js"
import { APIdeleteBookingPO } from "./APIdeleteBookingPO.js"


export class IndexPO {
    constructor() {
        this.apiContext = null;
        this.eventId = null;
        this.bookingDetails = null;
        this.apiLogin = new APILoginPO();
        this.apiCreateEvent = new APIcreateEventPO();
        this.apiEditEvent = new APIeditEventPO();
        this.apiBookEvent = new APIbookEventPO();
        this.apiDeleteBooking = new APIdeleteBookingPO();
    }
    async createRequest() {
        this.apiContext = await request.newContext();
    }
    async apiLoginPO() {
        const token = await this.apiLogin.loginWithAPI(this.apiContext)
        return token;
    }
    async apiCreateEventPO(apiToken) {
        this.eventId = await this.apiCreateEvent.apiEventCreation(this.apiContext,apiToken);
    }
    async apiEditEventPO(apiToken) {
        const eventDetails = await this.apiEditEvent.getRequiredEvent(this.eventId, this.apiContext, apiToken)
        await this.apiEditEvent.apiEditingEvent(eventDetails, this.eventId, this.apiContext, apiToken)
    }
    async apibookEventPO(apiToken) {
         this.bookingDetails = await this.apiBookEvent.apiBookingEvent(this.eventId, this.apiContext, apiToken);
        console.log("booking created REf: ",this.bookingDetails.bookingRef)
    }
    async apiDeleteBookingPO(apiToken) {
        const res = await this.apiDeleteBooking.apiDeleteBooking(this.apiContext,apiToken,this.bookingDetails.bookingId)
        console.log(res.message)
    }
}