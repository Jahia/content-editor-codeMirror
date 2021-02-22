# CodeMirror HTML for Jahia Content Editor
This module register the custom selector type [React CodeMirror Editor][codeMirror:url] for
Content Editor.
CodeMirror is an editor used to write HTML, CSS, Javascript or others source code directly
from a web page.

![001]

The module contains:
1. The custom selector type `CodeMirrorHTML` for Content Editor.
1. A form fields override to enable the editor for the property `sourceCode` of the content type
   `jnt:htmlCodeAsText`.

## CodeMirror HTML
The React-CodeMirror2 Editor is used in the file [codeMirrorHTMLCmp.jsx].

CodeMirror is configured with the following options:
```javascript
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
```
The option `mode: 'xml'` means it is configured to manage XML code only. HTML is a part of XML, so it is
managed properly.

## Form fields override
By default the property `sourceCode` of the content type `jnt:htmlCodeAsText` use a textarea:
```cnd
[jnt:htmlCodeAsText] > jnt:content, jmix:pageBuilderComponentMixin
 - sourceCode (string, textarea) indexed=no mandatory
 + * (jmix:droppableContent)
```
A textarea is not the best editor to deal with HTML source code. Thus, the module includes a
form field override to use the CodeMirror editor with the property `sourceCode`.

```json
{
  "name": "jnt:htmlCodeAsText",
  "fields": [
    {
      "name": "sourceCode",
      "selectorType": "CodeMirrorHTML"
    }
  ]
}
```
The code above is written in the file [jnt_htmlCodeAsText.json].

[001]:./doc/images/001_codeMirror4ContentEditor.png
[jnt_htmlCodeAsText.json]:./codeMirror-editor/src/main/resources/META-INF/jahia-content-editor-forms/fieldsets/jnt_htmlCodeAsText.json
[codeMirrorHTMLCmp.jsx]:./codeMirror-editor/src/javascript/ContentEditorExtensions/SelectorTypes/CodeMirror/CodeMirrorHTMLCmp.jsx
[codeMirror:url]:https://www.npmjs.com/package/react-codemirror2