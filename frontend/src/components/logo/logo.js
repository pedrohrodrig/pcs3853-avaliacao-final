import React from "react";
import { ReactComponent as LogoBlack } from '../../assets/apollo-logo-black.svg';
import { ReactComponent as LogoGrad } from '../../assets/apollo-logo.svg';

import "./logo.css"

function Logo(props) {
    const classes = "logo " + props.className;

    return (
        classes.includes("black")
        ? <LogoBlack className={classes} />
        : <LogoGrad className={classes} />
    );
}

export default Logo;
