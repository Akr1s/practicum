import React from 'react';

import Box from '@mui/material/Box';

const classes = {
    root: {
        flexGrow: 1,
        padding: '20px',
        fontSize: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

function Home() {
    return (
        <Box component="section" sx={classes.root}>
            Please, select a subject in sidebar menu to see laboratories
        </Box>
    );
}

export default Home;
