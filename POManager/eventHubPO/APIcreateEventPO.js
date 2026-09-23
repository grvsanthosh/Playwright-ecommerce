import { expect } from "@playwright/test"

const eventPayload = {
    title: "Chennai Tech Summit 2026",
    description: "A premier technology conference.",
    category: "Conference",
    venue: "Chennai International Centre",
    city: "Chennai",
    eventDate: "2028-09-21T09:00:00.000Z",
    price: 1500,
    totalSeats: 500,
    imageUrl: "https://example.com/banner.jpg"
}

export class APIcreateEventPO {
    constructor() {

    }
    async apiEventCreation(apiContext,apiToken) {
        const response = await apiContext.post("https://api.eventhub.rahulshettyacademy.com/api/events",
            {
                data: eventPayload,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiToken}`
                }
            }
        )
        
        expect(response.ok()).toBeTruthy();
        const resJSON = await response.json();
        expect(resJSON.message).toBe("Event created successfully")
        return resJSON.data.id
    }
}