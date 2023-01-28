import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SessionPicker() {
    return (
        <Autocomplete
        disablePortal
        // id="combo-box-demo"
        options={sessionOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Session" />}
        />
    );
}

const sessionOptions = [
    {label: '10:30am'},
    {label: '11:30am'},
    {label: '12:30pm'},
    {label: '1:00pm'},
    {label: '1:30pm'},
    {label: '2:00pm'},
    {label: '2:30pm'},
    {label: '3:00pm'},
    {label: '3:30pm'},
    {label: '4:00pm'},
];