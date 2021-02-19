import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
// import './RichTextMarkdown.css';

const RichTextCodeMirrorCmp = ({field, id, value, onChange}) => {
    const [valueText, setValueText] = useState('');

    // const converter = new TurndownService({headingStyle: 'atx'}).use(gfm);
    // const mdParser = new MarkdownIt(/* Markdown-it options */);

    const options = {
        mode: 'xml',
        theme: 'material',
        lineNumbers: true,
    };

    const handleBeforeChange = (editor, data, value) =>{
        setValueText(value);
    }
    const handleChange = (editor, data, value) =>{
        onChange(value);
    }

    return (
        <CodeMirror
            value={valueText}
            options={options}
            onBeforeChange={handleBeforeChange}
            onChange={handleChange}
        />
    );
};

// <MdEditor
//     id={id}
//     name={field.name}
//     value={valueText || (value && converter.turndown(value))}
//     readOnly={field.readOnly}
//     style={{height: '500px', width: '100%'}}
//     config={config}
//     renderHTML={text => {
//         setValueText(text);
//
//         return mdParser.render(text);
//     }}
//     onChange={({html}) => onChange(html)}
// />

RichTextCodeMirrorCmp.propTypes = {
    field: PropTypes.object,
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

// MdEditor.displayName = 'MdEditor';
RichTextCodeMirrorCmp.displayName = 'CodeMirror';

export default RichTextCodeMirrorCmp;
