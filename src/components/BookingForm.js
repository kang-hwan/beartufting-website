import React from 'react';
import { Stack, Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



export default function BookingForm() {
    return(
        <form className='form-container'>
            <h3 style={{fontWeight: 'bold', paddingBottom:'15px'}}>BOOKING REQUEST FORM</h3>
            <Stack spacing={2} direction='column'>
                <Box>
                    <h4>Your Details</h4>
                    <Stack spacing={2} className='booking-step1' direction='row'>
                        <TextField id="filled-basic" label="Full Name" variant="filled" size='normal' style={{flex: '2'}} required />
                        <TextField id="filled-basic" label="Contact No." variant="filled" size='normal' style={{flex: '2'}} required />
                        <TextField id="filled-basic" label="Email" variant="filled" size='normal' style={{flex: '3'}} required />
                    </Stack>
                </Box>
                <Box>
                    <h4 style={{margin: '0px'}}>Class Selection</h4>
                    <p style={{
                        marginTop: '0px',
                        color: 'gray',
                        fontSize: '14px'
                        }}>
                        * Max. capacity per session: 10pp <br />
                        * Deposit: $50pp
                    </p>
                    
                </Box>
                <Box>
                    <TextField
                    id="filled-multiline-static"
                    label="Message"
                    multiline
                    rows={10}
                    defaultValue="Is this the default value?"
                    variant="filled"
                    fullWidth
                    />
                </Box>
                <Stack>
                    <Button variant="contained">Send Request</Button>
                </Stack>
            </Stack>
        </form>
    )
}