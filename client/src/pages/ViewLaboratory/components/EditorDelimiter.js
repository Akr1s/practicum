import { Box } from '@mui/system';
import React from 'react';

function EditorDelimiter() {
    return (
        <Box
            sx={{
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '30px',
                letterSpacing: '4px',
            }}
        >
            ***
        </Box>
    );
}

export default EditorDelimiter;
