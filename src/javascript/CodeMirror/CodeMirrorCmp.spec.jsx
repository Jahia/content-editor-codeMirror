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

    // It('should use the xml mode', () => {
    //     const cmp = shallow(<CodeMirrorCmp {...defaultProps}/>);
    //     cmp.update();
    //     expect(cmp.find('CodeMirror').props().options.mode).toBe('xml');
    // });
    //
    // it('should have mode.base if mode: handlebars', () => {
    //     const props = {
    //         ...defaultProps,
    //         field: {
    //             ...defaultProps.field,
    //             selectorOptions: [{name: 'mode', value: 'handlebars'}]
    //         }
    //     };
    //     const cmp = shallow(<CodeMirrorCmp {...props}/>);
    //     expect(cmp.find('CodeMirror').props().options.mode).toEqual({name: 'handlebars', base: 'text/html'});
    // });

    // it('should have undefined theme due to wrong value', () => {
    //     const cmp = shallow(<CodeMirrorCmp {...defaultProps}/>);
    //     expect(cmp.find('CodeMirror').props().options.theme).toBeUndefined();
    // });

    it('should update CodeMirrorCmp value on beforeChange', () => {
        const newValue = '<h2>The new value</h2>';
        const cmp = shallow(<CodeMirrorCmp {...defaultProps}/>);

        cmp.find('CodeMirror').props().onBeforeChange(null, null, newValue);
        expect(cmp.props().value).toBe(newValue);
    });

    it('should update value on change', () => {
        const newValue = '<h3>The last value</h3>';
        const cmp = shallow(<CodeMirrorCmp {...defaultProps}/>);

        cmp.find('CodeMirror').props().onChange(null, null, newValue);

        expect(defaultProps.onChange).toHaveBeenCalledWith(newValue);
    });
});
