import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const classes = {
    text: { margin: '10px 0' },
};

export default function Average() {
    return (
        <Box>
            <Typography sx={classes.text}>
                Розрахунок середнього значення проведемо за формулою:
            </Typography>
            <Typography sx={{ ...classes.text, color: 'red' }}>Formula</Typography>
            <Typography sx={{ ...classes.text, color: 'red' }}>Result</Typography>
            <Typography sx={classes.text}>Обчислення середньоквадратичного відхилення:</Typography>
            <Typography sx={{ ...classes.text, color: 'red' }}>Formula</Typography>
            <Typography sx={{ ...classes.text, color: 'red' }}>Result</Typography>
        </Box>
    );
}
