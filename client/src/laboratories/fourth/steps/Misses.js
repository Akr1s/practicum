import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const classes = {
    text: { margin: '10px 0' },
};

export default function Misses() {
    return (
        <Box>
            <Typography sx={classes.text}>Вами було введено набір з 12 значень:</Typography>
            <Typography sx={{ ...classes.text, fontWeight: 700 }}>122, 121, 134, 133</Typography>
            <Typography sx={classes.text}>
                Серед них за обраним критерієм Ірвіна отримаємо:
            </Typography>
            <Typography sx={{ ...classes.text, color: 'red' }}>Formula</Typography>
            <Typography sx={{ ...classes.text, color: 'red' }}>Table</Typography>
            <Typography sx={{ ...classes.text, fontWeight: 700 }}> 134</Typography>
            <Typography sx={classes.text}>
                Ці значення будуть відкинуті в подальших розрахунках
            </Typography>
        </Box>
    );
}
