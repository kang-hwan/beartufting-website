import React from 'react';
import { Stack, Button } from '@mui/material';


export default function BookingForm() {
    return(
        <form>

            <Stack spacing={2} direction="row">
                <Button variant="contained">To Payment</Button>
            </Stack>
        </form>
    )
}