import React from "react";
import "./textbox.css"

function Textbox({ className, title, body }) {
    const classes = `textbox ${className}`;

    return (
        <div className={classes}>
            <h1 className="title">{title}</h1>
            <p className="body">{body}</p>
        </div>
    );
}

export default Textbox;
