// RichTextEditor.js
import React, { useRef } from 'react';

function RichTextEditor() {
  const editorRef = useRef(null);

  const handleBoldClick = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const boldElement = document.createElement('strong');
      boldElement.style.fontWeight = 'bold';
      range.surroundContents(boldElement);
    }
  };

  const handleEditorInput = () => {
    const content = editorRef.current.innerHTML;
    console.log(content);
  };

  return (
    <div>
      <div
        contentEditable={true}
        className="editor"
        ref={editorRef}
        onInput={handleEditorInput}
      ></div>
      <button onClick={handleBoldClick}>Bold</button>
    </div>
  );
}

export default RichTextEditor;
