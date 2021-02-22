import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
// import "codemirror/mode/javascript/javascript";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/keymap/sublime";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/comment-fold";
import "codemirror/addon/fold/foldgutter.css";
import "./CodeMirrorHTMLCmp.css";

const CodeMirrorHTMLCmp = ({field, id, value, onChange}) => {
    const [code, setCode] = useState(value);

    const options = {
        mode: 'xml',
        // theme: 'material',
        lineWrapping: true,
        smartIndent: true,
        lineNumbers: true,
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        autoCloseTags: true,
        keyMap: "sublime",
        matchBrackets: true,
        autoCloseBrackets: true,
        extraKeys: {
            "Ctrl-Space": "autocomplete"
        }
    };

    const handleBeforeChange = (editor, data, value) =>{
        setCode(value);
    }
    const handleChange = (editor, data, value) =>{
        onChange(value);
    }

    return (
        <CodeMirror
            value={code}
            options={options}
            onBeforeChange={handleBeforeChange}
            onChange={handleChange}
        />
    );
};

CodeMirrorHTMLCmp.propTypes = {
    field: PropTypes.object,
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

CodeMirrorHTMLCmp.displayName = 'CodeMirrorHTML';

export default CodeMirrorHTMLCmp;
