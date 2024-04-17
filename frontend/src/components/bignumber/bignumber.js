import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/icon/icon";

import "./bignumber.css"

function BigNumber({ className, number, text, iconType, to }) {
    const classes = to ? `bignumber ${className}` : `bignumber disabled-link ${className}`;

    return (
        <Link className={classes} to={to} >
                <Icon className="circle-icon" iconType={iconType} />

                <div className="number">
                    <h1>{number}</h1>
                    <p>{text}</p>
                </div>
        </Link>
    );
}

export default BigNumber;
