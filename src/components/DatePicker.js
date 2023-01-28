import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

export default function DatePickerAPI() {
    const [value, setValue] = React.useState(dayjs('today'));

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} style={{width: '50%'}}>
        <Stack spacing={3}>
            <MobileDatePicker
            label="Date"
            value={value}
            onChange={(newValue) => {
                setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            />
        </Stack>
        </LocalizationProvider>
    );    
}