import React from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

export default function CalculatorWrapper({ children }) {
    return (
        <Box
            className="ql-view-container"
            sx={{
                border: '1px solid rgb(204,204,204)',
                padding: '20px',
                position: 'relative',
                marginTop: '20px',
            }}
        >
            <Typography sx={{ textAlign: 'center', textTransform: 'uppercase' }}>
                Калькулятор
            </Typography>
            {children}
        </Box>
    );
}
