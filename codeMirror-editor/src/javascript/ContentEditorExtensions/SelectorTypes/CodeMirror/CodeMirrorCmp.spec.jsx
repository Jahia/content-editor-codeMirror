import React from 'react';
import {shallow} from '@jahia/test-framework';

import CodeMirrorCmp from './CodeMirrorCmp';

describe('CodeMirrorCmp', () => {
    let defaultProps;
    beforeEach(() => {
        defaultProps = {
            id: 'codemirror-id-1',
            field: {
                name: 'myCodeMirrorName',
                displayName: 'My codeMirror name',
                readOnly: false,
                selectorType: 'Text',
                requiredType: 'STRING',
                selectorOptions: [{name: 'mode', value: 'xml'}, {name: 'theme', value: 'wtf'}]
            },
            value: '<h1>The First value</h1>>',
            onChange: jest.fn()
        };
    });

    it('should contain CodeMirror', () => {
        const cmp = shallow(<CodeMirrorCmp {...defaultProps}/>);
        expect(cmp.find('CodeMirror').exists()).toBeTruthy();
    });

    it('should use the xml mode', () => {
        const cmp = shallow(<CodeMirrorCmp {...defaultProps}/>);
        expect(cmp.find('CodeMirror').props().options.mode).toBe('xml');
    });

    it('should have mode.base if mode: handlebars', () => {
        const props = {
            ...defaultProps,
            field: {
                ...defaultProps.field,
                selectorOptions: [{name: 'mode', value: 'handlebars'}]
            }
        };
        const cmp = shallow(<CodeMirrorCmp {...props}/>);
        expect(cmp.find('CodeMirror').props().options.mode).toEqual({name: 'handlebars', base: 'text/html'});
    });

    it('should have undefined theme due to wrong value', () => {
        const cmp = shallow(<CodeMirrorCmp {...defaultProps}/>);
        expect(cmp.find('CodeMirror').props().options.theme).toBeUndefined();
    });

    // A it('should update CodeMirror value onBeforeChange', () => {
    //     const cmp = shallow(<CodeMirrorCmp {...defaultProps}/>);
    //
    //     // Const code = cmp.find('CodeMirror').props().onBeforeChange('<h2>The new value</h2>');
    //     cmp.find('CodeMirror').simulate('change', '<h2>The new value</h2>');
    //     expect(cmp.find('CodeMirror').props().value).toBe('<h2>The new value</h2>');
    // });

    it('should update value on change', () => {
        const cmp = shallow(<CodeMirrorCmp {...defaultProps}/>);

        cmp.find('CodeMirror').simulate('change', '<h3>The last value</h3>');

        expect(defaultProps.onChange).toHaveBeenCalledWith('<h3>The last value</h3>');
    });
});
