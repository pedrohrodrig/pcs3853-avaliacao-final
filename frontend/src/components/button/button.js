import React from "react";
import { Link } from "react-router-dom";
import Icon from "../icon/icon";

import "./button.css";

function Button({ className, to, text, icon, iconType, onClick }) {
    const classes = icon ? `but ${icon} ${className}` : `but text ${className}`;

    return (
        <div className={classes} onClick={onClick}>
            <Link className="but-link" to={to}>
                <Icon iconType={iconType} />
                {text}
            </Link>
        </div>
    );
}

export default Button;
