
export class APIeditEventPO {
    constructor() {

    }
    async getRequiredEvent(eventId, apiContext, apiToken) {
        const getResponse = await apiContext.get(`https://api.eventhub.rahulshettyacademy.com/api/events/${eventId}`,
            {
                headers: {
                    'Context-Type': "application/json",
                    'Authorization': `Bearer ${apiToken}`
                }
            }
        )
        const resJSON = await getResponse.json()
        const eventDetails = resJSON.data

        return eventDetails



    }
    async apiEditingEvent(eventDetails, eventId, apiContext, apiToken) {
        const eventData = eventDetails
        eventData.totalSeats = 200;
        eventData.price = '3999';

        const editRes = await apiContext.put(`https://api.eventhub.rahulshettyacademy.com/api/events/${eventId}`,
            {
                headers: {
                    'Context-Type': "application/json",
                    'Authorization': `Bearer ${apiToken}`
                },
                data: eventData
            }
        )
        const resJSON = await editRes.json();
        const resData = resJSON.data

    }
}