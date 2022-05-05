import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const classes = {
    text: { margin: '10px 0' },
    input: { minWidth: '400px', padding: '5px' },
    select: { minWidth: '300px' },
};

export default function InputRes() {
    return (
        <Box>
            <form>
                <Typography sx={classes.text}>
                    Введіть результати вимірювань, розділені комою:
                </Typography>
                <TextField sx={classes.input} variant="outlined" required />

                <Typography sx={classes.text}>Виберіть критерій для виявлення промахів:</Typography>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Method"
                    sx={classes.select}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>критерій Ірвіна</MenuItem>
                    <MenuItem value={20}>метод трьох сигм</MenuItem>
                    <MenuItem value={30}>критерій Романовського</MenuItem>
                </Select>
            </form>
        </Box>
    );
}
