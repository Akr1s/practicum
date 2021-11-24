import React from 'react';
import { EDITOR_JS_TOOLS } from './constants';
import ReactEditorJS from 'react-editor-js';

function ReactEditor(props) {
    const { editorRef, defaultData } = props;
    console.log('d', defaultData);
    return <ReactEditorJS defaultValue={defaultData} tools={EDITOR_JS_TOOLS} ref={editorRef} />;
}

export default ReactEditor;
