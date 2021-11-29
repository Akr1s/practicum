import React from 'react';
import { Box } from '@mui/system';
import { Card } from '@mui/material';
import { IoWarningOutline } from 'react-icons/io5';

function EditorWarning({ data }) {
    if (!data.title) return null;
    return (
        <Card sx={{ padding: '20px' }}>
            <Box sx={{ marginBottom: '10px', fontSize: '18px', fontWeight: 'bold' }}>
                <IoWarningOutline /> {data.title}
            </Box>
            <Box>{data.message}</Box>
        </Card>
    );
}

export default EditorWarning;
