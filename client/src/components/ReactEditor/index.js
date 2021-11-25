import React from 'react';
import { EDITOR_JS_TOOLS } from './constants';
import { createReactEditorJS } from 'react-editor-js';
import './ReactEditor.css';

const ReactEditorJS = createReactEditorJS();

function ReactEditor(props) {
    const { editorRef, defaultData } = props;

    const handleInitialize = React.useCallback(
        (instance) => {
            editorRef.current = instance;
        },
        [editorRef],
    );

    return (
        <ReactEditorJS
            onInitialize={handleInitialize}
            defaultValue={defaultData}
            tools={EDITOR_JS_TOOLS}
        />
    );
}

export default ReactEditor;
