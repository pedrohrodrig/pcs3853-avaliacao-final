import React from "react";
import "./title.css";

function Title({ className, head, body }) {
    const classes = body ? `page-title body ${className}` : `title ${className}`;

    return (
        <div className={classes}>
            <h1>{head}</h1>
            <p>{body}</p>
        </div>
    );
}

export default Title;