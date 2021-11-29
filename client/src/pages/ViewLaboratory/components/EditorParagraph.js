import { Typography } from '@mui/material';
import React from 'react';

function EditorParagraph({ data }) {
    return <Typography paragraph={true}>{data.text}</Typography>;
}

export default EditorParagraph;
