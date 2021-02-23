import CodeMirrorCmp from './CodeMirror';

export const registerSelectorTypes = registry => {
    registry.add('selectorType', 'CodeMirror', {cmp: CodeMirrorCmp, supportMultiple: false});
};
