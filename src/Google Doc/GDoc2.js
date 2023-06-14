import React, { useState } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; 

function GDoc2() {
    const modules = {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike','undo','redu'],
        ],
      };
      
    const { quill, quillRef } = useQuill({ modules })
    const [value, setValue] = useState()

    React.useEffect(() => {
        if (quill) {
          quill.on('text-change', () => {
            console.log(quillRef.current.firstChild.innerHTML);
            setValue(quillRef.current.firstChild.innerHTML)
          });
        }
      }, [quill]);

  return (
    <div>
      <div style={{ width: 500, height: 300 }}>
      <div ref={quillRef} />
      </div>
    </div>
  )
}

export default GDoc2
