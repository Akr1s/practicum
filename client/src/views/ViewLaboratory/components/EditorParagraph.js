import { Typography } from '@mui/material';
import React from 'react';
import { escapeHtml } from '../../../utils/escape';

function EditorParagraph({ data }) {
    return <Typography paragraph={true}>{escapeHtml(data.text)}</Typography>;
}

export default EditorParagraph;
