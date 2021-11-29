import React from 'react';

function EditorCode({ data }) {
    return <code style={{ display: 'block', margin: '20px 0px' }}>{data.code}</code>;
}

export default EditorCode;
