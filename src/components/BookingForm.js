import React from 'react';
import { Stack, Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LooksOneSharpIcon from '@mui/icons-material/LooksOneSharp';
import LooksTwoSharpIcon from '@mui/icons-material/LooksTwoSharp';
import DatePickerAPI from './DatePicker';
import SessionPicker from './SessionPicker';


export default function BookingForm() {
    return(
        <div className='form-container'>
            <div className='booking-step1'>
                <LooksOneSharpIcon fontSize='large' style={{marginLeft: '5px'}}/><h3>Booking</h3>
                <DatePickerAPI /><SessionPicker />
                
            </div>
            <div className='booking-step2'>
                <LooksTwoSharpIcon fontSize='large' style={{marginLeft: '5px'}} /><h3>Your Details</h3>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="First Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" /><br />
                        <TextField id="outlined-basic" label="Mobile" variant="outlined" />
                        <TextField id="outlined-basic" label="E-mail" variant="outlined" />
                    </Box>
                    What is your preferred contact method? Mobile Email
            </div>
            <Stack spacing={3} direction="row">
                <Button variant="contained">To Payment</Button>
            </Stack>
        </div>
    )
}