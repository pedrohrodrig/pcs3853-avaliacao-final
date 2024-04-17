import React, { useContext } from "react";
import HorizontalCard from "../../horizontalcard/horizontalcard";
import PathContext from "../../../contexts/PathContext";

import "../cardlist.css";

function AppointmentList({ className, appointments, small, to }) {
    const classes = small ? `small-card-list ${className}` : `card-list ${className}`;
    const n = small ? 3 : appointments.length;
    const { paths } = useContext(PathContext);
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    }

    return (
        <div className={classes}>
            {
                appointments.map((obj, i) =>
                {
                    const date = new Date(obj.start_datetime);
                    if (i < n) {
                        return (
                          <HorizontalCard
                            title={obj.patient_name}
                            image="/images/user.jpeg"
                            col1={!small && date.toLocaleString("en-GB", options)}
                            col2={!small && obj.status}
                            to={to ? to : `${paths.front}/appointment?id=${obj.id}`}
                            key={i}
                          />
                        );
                    }
                })
            }
        </div>
    );
}

export default AppointmentList;
