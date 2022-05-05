import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const classes = {
    text: { margin: '10px 0' },
    input: { minWidth: '400px', padding: '5px' },
};

export default function ResMiss() {
    return (
        <Box>
            <Typography sx={classes.text}>
                Для знаходження загальної похибки необхідні наступні величини:
            </Typography>
            <TextField sx={classes.input} variant="outlined" label="Довірча імовірність" required />
            <TextField
                sx={classes.input}
                variant="outlined"
                label="Ціна поділки приладу"
                required
            />
            <Box sx={{ margin: '10px 0' }}>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Похибка приладу</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Відома" />
                        <FormControlLabel value="male" control={<Radio />} label="Розрахувати" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <TextField
                sx={classes.input}
                variant="outlined"
                label="Клас точності приладу"
                required
            />
            <TextField sx={classes.input} variant="outlined" label="Діапазон приладу" required />
        </Box>
    );
}
