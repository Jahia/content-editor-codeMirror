# CodeMirror for Jahia Content Editor
This module register as **Selector Type** for Content Editor the [React CodeMirror Editor][codeMirror:url].

CodeMirror is an editor used to write HTML, CSS, Javascript, and many others source code directly
from a web page.

![cover]

The module contains:
1. The custom selector type `CodeMirror` for Content Editor.

## CodeMirror
The React-CodeMirror2 Editor is used in the file [codeMirrorCmp.jsx].
By default, the Selector has seven modes enabled.

```javascript
const enabledMode = [
  'xml',
  'javascript',
  'htmlembedded', // For jsp
  'groovy',
  'css', // Include scss
  'markdown',
  'handlebars' // Code -> mode: {name: "handlebars", base: "text/html"}
];
```
CodeMirror is configured with the following options:

```javascript
const codeMirrorOptions = {
  lineWrapping: true,
  smartIndent: true,
  lineNumbers: true,
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  autoCloseTags: true,
  keyMap: 'sublime',
  matchBrackets: true,
  autoCloseBrackets: true,
  extraKeys: {
    'Ctrl-Space': 'autocomplete'
  },
  viewportMargin: Infinity
};
```
The `theme` and `mode` properties are set programmatically based on the **Selector Type** configuration
written by the developer.

### Selector Type Configuration
To configure a Selector Type, a developer has to write a json file. A Selector Type configuration
example for the [Industrial Template Set][sampleSelectorTypeConfig:url]:
```json
{
  "name": "timix:owlcarouselAdvancedSettings",
  "fields": [
    {
      "name": "options",
      "selectorType": "CodeMirror",
      "selectorOptions":[
        {
          "name": "mode",
          "value": "javascript"
        }
      ]
    }
  ]
}
```
The `selectorOptions` available are :
* `mode` with value : 
   * `xml`
   * `javascript`
   * `htmlembedded` for jsp
   * `groovy`
   * `css` included scss
   * `markdown`
   * `handlebars`
   
* `theme` with value :
   * `material`

The `base` entry is available for the `handlebars` mode ([more about handlebars][handlebarsMode]). 

[cover]: ./doc/images/cover.png
[codeMirrorCmp.jsx]: ./src/javascript/CodeMirror/CodeMirrorCmp.jsx

[codeMirror:url]: https://www.npmjs.com/package/react-codemirror2
[contentEditorCust:url]: https://academy.jahia.com/home/documentation/developer/dx/8/extending-and-customizing-jahia-ui/creating-custom-selector-types-for-content-editor.html
[sampleSelectorTypeConfig:url]: https://github.com/hduchesne/industrial/blob/main/src/main/resources/META-INF/jahia-content-editor-forms/fieldsets/timix_owlcarouselAdvancedSettings.json
[handlebarsMode]: https://codemirror.net/mode/handlebars/index.html