import React, { useContext } from "react";
import UserPhoto from "../../components/userphoto/userphoto";
import Icon from "../../components/icon/icon";
import UserContext from "../../contexts/UserContext";
import PathContext from "../../contexts/PathContext";

import "./profile.css"

function Profile({ className, name, info, edit, to }) {
    const classes = info ?  `profile-cont info ${className}` : `profile-cont ${className}`;
    const { user } = useContext(UserContext);
    const { paths } = useContext(PathContext);

    return (
        <div className={classes}>
            <Icon iconType="chevron-left" to={to} />
            <UserPhoto className="grad" />

            <div className="info">
                <div className="name">
                    <h1>{name}</h1>
                    { edit && <Icon className="edit-icon" iconType="edit" to={`${paths.front}/profile/edit`} /> }
                </div>
                <div className="info-cont">
                    <p>{info}</p>
                </div>
            </div>
        </div>
    );
}
export default Profile;