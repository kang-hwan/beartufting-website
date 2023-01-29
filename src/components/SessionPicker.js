import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({age, setAge}) {
    
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl style={{width: '220.21px', marginLeft: '15px'}}>
            <InputLabel id="demo-simple-select-label">Session Start</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Session Start"
            onChange={handleChange}
            >
            <MenuItem value={1100}>11:00am</MenuItem>
            <MenuItem value={1200}>12:00pm</MenuItem>
            <MenuItem value={1300}>1:00pm</MenuItem>
            <MenuItem value={1400}>2:00pm</MenuItem>
            <MenuItem value={1500}>3:00pm</MenuItem>
            <MenuItem value={1600}>4:00pm</MenuItem>
            </Select>
        </FormControl>
        </Box>
    );
}