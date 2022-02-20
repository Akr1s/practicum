import React from 'react';

function EditorCode({ data }) {
    return (
        <code
            style={{
                display: 'block',
                margin: '20px 0px',
                backgroundColor: "var(--white-color, 'white')",
                padding: '10px',
            }}
        >
            <pre style={{ margin: 0 }}>{data.code}</pre>
        </code>
    );
}

export default EditorCode;
