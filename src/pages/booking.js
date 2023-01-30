import React from 'react';
import './booking.css';
import BookingForm from '../components/BookingForm';

function Booking() {
    return (
        <div className='booking-container'>
            <h1>BOOKING REQUEST</h1>
            <ul>
                <li>Once booking requests are submitted, we will review and come back to you within next 2 hours to confirm.</li>
                <li>Deposit needs to be paid at the end of the booking request to secure your reservation. The amount will be deducted from your spending on the day. Cancellation needs to be made 24 hours prior to the booking in order to refund deposits.</li>
                <li>Please note that 'Creative Kids Voucher' and 'Pet Illustration' are not refundable once you have submitted booking request.</li>
            </ul>
            <BookingForm />
        </div>
    )
}

export default Booking;