import React from 'react';
import { Typography } from '@mui/material';

function EditorHeader({ data }) {
    return <Typography variant={`h${data.level}`}>{data.text}</Typography>;
}

export default EditorHeader;
