import React from "react";
import HorizontalCard from "../../horizontalcard/horizontalcard";

import "../cardlist.css";

function PatientHistoryList({ className, appointments, small }) {
    const classes = small ? `small-card-list ${className}` : `card-list ${className}`;
    const n = small ? 3 : appointments.length;

    return (
        <div className={classes}>
            {
                appointments.map((obj, i) =>
                {
                    while (i < n) {
                        return (
                            <HorizontalCard
                                title={obj.name}
                                image={obj.photo}
                                col1={!small && obj.service}
                                col2={!small && obj.date}
                                to="/patient-appointment"
                                key={i}
                            />
                        );
                    }
                })
            }
        </div>
    );
}

export default PatientHistoryList;
