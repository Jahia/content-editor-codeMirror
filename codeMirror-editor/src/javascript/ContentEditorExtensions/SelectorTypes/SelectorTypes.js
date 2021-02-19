import RichTextCodeMirrorCmp from './CodeMirror';

export const registerSelectorTypes = registry => {
    registry.add('selectorType', 'CodeMirror', {cmp: RichTextCodeMirrorCmp, supportMultiple: false});
};
