export class APIdeleteBookingPO{
    constructor(){

    }
    async apiDeleteBooking(apiContext,apiToken,bookingId){
        const resDelete = await apiContext.delete(`https://api.eventhub.rahulshettyacademy.com/api/bookings/${bookingId}`,
            {
                headers: {
                    "Context-Type": "application/json",
                    "Authorization": `Bearer ${apiToken}`
                }
            }
        )
        const resJSON = await resDelete.json();

        return resJSON
        

        
    }
}