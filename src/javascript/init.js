import {registry} from '@jahia/ui-extender';
import CodeMirrorCmp from './CodeMirror';

export default function () {
    registry.add('callback', 'codeMirrorEditor', {
        targets: ['jahiaApp-init:20'],
        callback: () => {
            registry.add('selectorType', 'CodeMirror', {cmp: CodeMirrorCmp, supportMultiple: false});
            console.debug('%c CodeMirror Editor Extensions  is activated', 'color: #3c8cba');
        }
    });
}
