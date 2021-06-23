import React from 'react';
import * as PropTypes from 'prop-types';
import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/htmlembedded/htmlembedded';
import 'codemirror/mode/groovy/groovy';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/handlebars/handlebars';
import 'codemirror/theme/material.css';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/foldgutter.css';
import './CodeMirrorCmp.css';

const CodeMirrorCmp = ({field, id, value, onChange}) => {
    const [code, setCode] = React.useState(value);
    const {selectorOptions} = field;
    React.useEffect(() => {
        console.log('CodeMirrorCmp field : ', field);
    }, [field]);

    const enabledMode = [
        'xml',
        'javascript',
        'htmlembedded', // For jsp
        'groovy',
        'css', // Include scss
        'markdown',
        'handlebars' // Code -> mode: {name: "handlebars", base: "text/html"}
    ];
    const enabledTheme = [
        'material'
    ];

    const codeMirrorOptions = {
        lineWrapping: true,
        smartIndent: true,
        lineNumbers: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        autoCloseTags: true,
        keyMap: 'sublime',
        matchBrackets: true,
        autoCloseBrackets: true,
        extraKeys: {
            'Ctrl-Space': 'autocomplete'
        },
        viewportMargin: Infinity
    };

    const defaultMode = {value: 'xml'};
    const mode = selectorOptions.find(option => option.name === 'mode') || defaultMode;
    // A console.debug('mode : ', mode);
    // console.debug('enabledMode : ', enabledMode);

    if (enabledMode.includes(mode.value)) {
        let optMode = mode.value;
        switch (optMode) {
            case 'handlebars': {
                const base = selectorOptions.find(option => option.name === 'base') || 'text/html';
                optMode = {name: 'handlebars', base};
                break;
            }
            // No default
        }

        codeMirrorOptions.mode = optMode;
    } else {
        console.warn('CodeMirror "mode" not supported by the Selector, switch to "xml" as default');
        codeMirrorOptions.mode = defaultMode.value;
    }

    const theme = selectorOptions.find(option => option.name === 'theme');
    if (theme) {
        if (enabledTheme.includes(theme.value)) {
            codeMirrorOptions.theme = theme.value;
        } else {
            console.warn('CodeMirror "theme" not supported by the Selector, switch to default');
        }
    }

    const handleBeforeChange = (editor, data, editorValue) => {
        setCode(editorValue);
    };

    const handleChange = (editor, data, editorValue) => {
        console.log('handleChange');
        return onChange(editorValue);
    };

    // Const handleUpdate = (editor, data, editorValue) => {
    //     onChange(editorValue);
    // };

    // Code -> onSelection={(editor, data) => {}}

    // onUpdate={handleUpdate}
    // value= {code}
    console.log('paint!');
    return (
        <CodeMirror
            id={id}
            value={code}
            options={codeMirrorOptions}
            onBeforeChange={handleBeforeChange}
            onChange={handleChange}
        />
    );
};

CodeMirrorCmp.propTypes = {
    field: PropTypes.object,
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

CodeMirror.displayName = 'CodeMirror';
CodeMirrorCmp.displayName = 'CodeMirrorCmp';

export default CodeMirrorCmp;
