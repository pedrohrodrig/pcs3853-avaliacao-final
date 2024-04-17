import React from "react";

import "./fileinput.css";

function FileInput({ placeholder, handleFileInput, name }) {

  return (
    <div className="file-upload">
      <h3>{placeholder || "Clique para fazer upload"}</h3>
      <p>Tamanho máximo 100mb</p>
      <input type="file" name={name} onChange={handleFileInput} accept="application/pdf" />

    </div>
  );
}

export default FileInput;


