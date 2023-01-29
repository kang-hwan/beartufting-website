import React from 'react';
import { Stack, Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LooksOneSharpIcon from '@mui/icons-material/LooksOneSharp';
import LooksTwoSharpIcon from '@mui/icons-material/LooksTwoSharp';
import DatePickerAPI from './DatePicker';
import dayjs from 'dayjs';
import SessionPicker from './SessionPicker';


export default function BookingForm() {
    const [value, setValue] = React.useState(dayjs(new Date()));
    const [age, setAge] = React.useState('');


    const submit = (e) => {
        e.preventDefault();

        // collect all the state variables
        console.log('Validating value: ', value);
        console.log('Validating Age: ', age);
        
        // submit to an api
        
        console.log('submitting value: ', value);
        console.log('submitting Age: ', age);

        // navigate to the next page

        console.log('navigate to next page');
    }
    
    return(
        <form className='form-container' onSubmit={(e) => submit(e)}>
            <div className='booking-step1'>
                <LooksOneSharpIcon fontSize='large' style={{marginLeft: '5px'}}/><h3>Booking</h3>
                <div className='booking-step1-inputs' style={{display: 'flex',}}>
                    <DatePickerAPI value={value} setValue={setValue} />
                    <SessionPicker age={age} setAge={setAge} />
                </div>
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
            <Stack spacing={3} direction="row" style={{marginTop: '10px'}}>
                <Button type='submit' variant="contained">To Payment</Button>
            </Stack>
        </form>
    )
}