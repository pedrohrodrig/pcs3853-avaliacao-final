import React from "react";
import "./textInput.css";

function TextInput({ className, title, type, placeholder, handleTextInput, name, isFloat }) {

    const classes = `textinput ${className}`;

    return (
      <div className={classes}>
        <h1 className="title">{title}</h1>
        <input
          className="input"
          placeholder={placeholder}
          onChange={handleTextInput}
          name={name}
          type={type}
          step={type === "number" && isFloat ? "0.01" : undefined}
        ></input>
      </div>
    );
};

export default TextInput;
