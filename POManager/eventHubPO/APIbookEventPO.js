export class APIbookEventPO{
    constructor(){
       
    }
    async apiBookingEvent(eventId,apiContext,apiToken){

        const bookingRes = await apiContext.post("https://api.eventhub.rahulshettyacademy.com/api/bookings",
            {
                headers: {
                    'Context-Type': "application/json",
                    'Authorization': `Bearer ${apiToken}`
                },
                data:{
                eventId: eventId,
                customerName: "Priya Sharma",
                customerEmail: "priya.sharma@email.com",
                customerPhone: "+91-9876543210",
                quantity: 2
                }
            }
        )
        const resJSON = await bookingRes.json();
        const bookingRef = resJSON.data.bookingRef;
        const bookingId = resJSON.data.id;
        return {bookingRef,bookingId}
    }
}