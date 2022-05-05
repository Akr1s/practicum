import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const classes = {
    text: { margin: '10px 0' },
};

export default function Results() {
    return (
        <Box>
            <Typography sx={classes.text}>
                Шукану величину можна представити в наступному вигляді:
            </Typography>
            <Typography sx={{ ...classes.text, color: 'red' }}>Formula</Typography>
            <Typography sx={classes.text}>Зведена таблиця результатів:</Typography>
            <Typography sx={{ ...classes.text, color: 'red' }}>Formula</Typography>
        </Box>
    );
}
