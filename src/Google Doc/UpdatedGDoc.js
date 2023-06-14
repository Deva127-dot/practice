import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaFacebookF } from 'react-icons/fa';

export default function UpdatedGDoc() {
  const quillRef = useRef(null);
  const [data, setData] = useState("");

  const handleChange = (value) => {
    setData(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const redo = () => {
    if (quillRef.current) {
      quillRef.current.editor.history.redo();
    }
  };

  const undo = () => {
    if (quillRef.current) {
      quillRef.current.editor.history.undo();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Google Docs Form</h1>
        <ReactQuill
          ref={quillRef}
          value={data}
          onChange={handleChange}
          modules={{ toolbar: true }}
          
        />
        <FaFacebookF/>
        <button type="submit">Submit</button>
        <button onClick={redo}>Redo</button>
        <button onClick={undo}>Undo</button>
      </form>
    </div>
  );
}
