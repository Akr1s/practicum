import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const classes = {
    root: {
        backgroundColor: 'var(--white-color, "white")',
        padding: '15px',
    },
    text: { fontSize: '24px', fontWeight: 600, textAlign: 'center' },
};

function Header() {
    return (
        <Box component="header" sx={classes.root}>
            <Typography sx={classes.text}>Лабораторний практикум</Typography>
        </Box>
    );
}

export default Header;
