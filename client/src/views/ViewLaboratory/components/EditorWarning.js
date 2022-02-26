import React from 'react';

import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Box } from '@mui/system';
import { Card } from '@mui/material';

function EditorWarning({ data }) {
    if (!data.title) return null;
    return (
        <Card sx={{ padding: '20px' }}>
            <Box sx={{ marginBottom: '10px', fontSize: '18px', fontWeight: 'bold' }}>
                <WarningAmberIcon /> {data.title}
            </Box>
            <Box>{data.message}</Box>
        </Card>
    );
}

export default EditorWarning;
