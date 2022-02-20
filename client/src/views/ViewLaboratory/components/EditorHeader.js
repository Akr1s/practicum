import React from 'react';
import { Typography } from '@mui/material';
import { escapeHtml } from '../../../utils/escape';

function EditorHeader({ data }) {
    return <Typography variant={`h${data.level}`}>{escapeHtml(data.text)}</Typography>;
}

export default EditorHeader;
