import React from "react";
import { Link } from "react-router-dom";
import "./icon.css";

import { ReactComponent as Activity } from "../../assets/activity.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import { ReactComponent as Check } from "../../assets/check.svg";
import { ReactComponent as ChevronLeft } from "../../assets/chevron-left.svg";
import { ReactComponent as ChevronRight } from "../../assets/chevron-right.svg";
import { ReactComponent as Clipboard } from "../../assets/clipboard.svg";
import { ReactComponent as Dollar } from "../../assets/dollar.svg";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import { ReactComponent as File } from "../../assets/file.svg";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as Logout } from "../../assets/logout.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Trash } from "../../assets/trash.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import { ReactComponent as X } from "../../assets/x.svg";
import { ReactComponent as XCircle } from "../../assets/x-circle.svg";

function Icon({ className, iconType, to }) {
    const classes = to ? `icon ${className}` : `icon disabled-link ${className}`;

    switch (iconType) {
        case "activity": return <Link className={classes} to={to}><Activity /></Link>;
        case "arrow-right": return <Link className={classes} to={to}><ArrowRight /></Link>;
        case "check":  return <Link className={classes} to={to}><Check /></Link>;
        case "chevron-left": return <Link className={classes} to={to}><ChevronLeft /></Link>;
        case "chevron-right": return <Link className={classes} to={to}><ChevronRight /></Link>;
        case "clipboard": return <Link className={classes} to={to}><Clipboard /></Link>;
        case "dollar": return <Link className={classes} to={to}><Dollar /></Link>;
        case "edit": return <Link className={classes} to={to}><Edit /></Link>;
        case "file": return <Link className={classes} to={to}><File /></Link>;
        case "heart": return <Link className={classes} to={to}><Heart /></Link>;
        case "logout": return <Link className={classes} to={to}><Logout /></Link>;
        case "search": return <Link className={classes} to={to}><Search /></Link>;
        case "trash": return <Link className={classes} to={to}><Trash /></Link>;
        case "user": return <Link className={classes} to={to}><User /></Link>;
        case "x": return <Link className={classes} to={to}><X /></Link>;
        case "x-circle": return <Link className={classes} to={to}><XCircle /></Link>;
    }
}

export default Icon;
