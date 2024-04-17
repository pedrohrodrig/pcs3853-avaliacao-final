import React from "react";
import { Link } from "react-router-dom";

import "./tabs.css";

function Tabs({ className, labels, to }) {
    const classes = `tabs ${className}`;
    const paths = to ? to : [];

    return (
        <div className={classes}>
            {
                labels.map((label, i) =>
                {
                    return (
                        <Link className="tab" to={paths[i]} key={i}>{label}</Link>
                    );
                })
            }
        </div>
    );
}

export default Tabs;
