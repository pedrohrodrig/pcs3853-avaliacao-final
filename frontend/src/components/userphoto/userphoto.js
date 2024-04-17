import React from "react";
import { Link } from "react-router-dom";
import UserImage from "../../assets/user.jpeg"

import "./userphoto.css";

function UserPhoto({ className, name, to }) {
    const classes = name ? `user name ${className}` : `user ${className}`;

    return (
        <div className={classes}>
            <Link className={!to && "disabled-link"} to={to}>
                <img src={UserImage} alt="user" />
                <h1>Lucas Garieri</h1>
            </Link>
        </div>
    );
}
export default UserPhoto;