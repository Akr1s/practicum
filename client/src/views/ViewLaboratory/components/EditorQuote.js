import { Card } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function EditorQuote({ data }) {
    if (!data.title) return null;
    return (
        <Card sx={{ padding: '20px' }}>
            <Box sx={{ marginBottom: '10px', fontSize: '18px', fontWeight: 'bold' }}>
                <blockquote>{data.title}</blockquote>
            </Box>
            <Box>{data.message}</Box>
        </Card>
    );
}

export default EditorQuote;
