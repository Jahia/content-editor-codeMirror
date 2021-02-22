import {registry} from '@jahia/ui-extender';
import register from './ContentEditorExtensions.register';

export default function () {
    registry.add('callback', 'codeMirrorHTMLEditor', {
        targets: ['jahiaApp-init:20'],
        callback: register
    });
}
