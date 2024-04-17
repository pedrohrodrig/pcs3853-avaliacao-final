import React from "react";
import { Link } from "react-router-dom";
import Icon from "../icon/icon";

import "./horizontalcard.css";

function HorizontalCard({ className, title, body, col1, col2, image, iconType, to }) {
    const classes = (to ? `hcard clickable ${className}` : `hcard disabled-link ${className}`);
    const small = className ? className.includes('small') : false;

    return (
        <Link className={classes} to={to}>
            {
                image
                ? <div className="image"><img src={image} alt="card"/></div>
                : <div className="icon-div"><Icon className="hcard-icon" iconType={iconType} /></div>
            }

            <div className="card-content">

                <div className="card-col">
                    <div className="text">
                        <h1 className="title">{title}</h1>
                        { (body && !small) && <p className="body">{body}</p> }
                    </div>
                </div>

                {
                    (col1 && !small) && (
                        <div className="card-col">
                            <p className="body">{col1}</p>
                        </div>
                    )
                }

                {
                    (col2 && !small) && (
                        <div className="card-col">
                            <p className="body">{col2}</p>
                        </div>
                    )
                }

                <div className="iconbox">
                    <Icon iconType="chevron-right" />
                </div>
            </div>
        </Link>
    );
}

export default HorizontalCard;
