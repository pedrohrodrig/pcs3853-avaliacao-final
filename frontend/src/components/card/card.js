import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/logo";
import Button from "../button/button";
import Icon from "../icon/icon";

import "./card.css";

function Card({ className, clickable, title, body, col1, col2, image, to }) {
    const classes = clickable ? `card clickable ${className}` : `card ${className}`;

    return (
        <Link className={classes} to={to}>
            {image && <div className="image">
                <img src={image} alt="card"/>
            </div>}

            <div className="card-content">

                <div className="card-col">
                    <div className="text">
                        <h1 className="title">{title}</h1>
                        { body && <p className="body">{body}</p> }
                    </div>

                    <div className="buttons">
                        <Button className="black outline very-small" text="Button" />
                        <Logo className="black" />
                    </div>
                </div>

                <div className="card-col">
                    <p className="body">{col1}</p>
                </div>

                <div className="card-col">
                    <p className="body">{col2}</p>
                </div>

                <div className="iconbox">
                    <Icon iconType="chevron-right" />
                </div>
            </div>
        </Link>
    );
}

export default Card;
