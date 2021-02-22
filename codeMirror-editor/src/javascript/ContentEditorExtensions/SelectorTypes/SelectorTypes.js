import CodeMirrorHTMLCmp from './CodeMirror';

export const registerSelectorTypes = registry => {
    registry.add('selectorType', 'CodeMirrorHTML', {cmp: CodeMirrorHTMLCmp, supportMultiple: false});
};
