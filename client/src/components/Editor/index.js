import React from 'react';

import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import CustomToolbar from './CustomToolbar';

export default function Editor({ data, handleDataChange, readOnly }) {
    const modules = {
        toolbar: {
            container: '#toolbar',
        },
    };
    const formats = [
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'color',
        'background',
        'script',
        'header',
        'blockquote',
        'code-block',
        'indent',
        'list',
        'direction',
        'align',
        'link',
        'image',
        'video',
        'formula',
    ];

    return (
        <>
            <CustomToolbar />
            <ReactQuill
                value={data}
                onChange={handleDataChange}
                modules={modules}
                formats={formats}
                readOnly={readOnly}
            />
        </>
    );
}
