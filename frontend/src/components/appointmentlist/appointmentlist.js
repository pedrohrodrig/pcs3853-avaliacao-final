import React from "react";
import Card from "../../components/card/card";

import "./appointmentlist.css";

function AppointmentList({ patients }) {
    return (
        <div className="appointment-list">
            {
                patients.map((obj, i) => {
                    return (
                        <Card
                            className="horizontal"
                            clickable={true}
                            title={obj.name}
                            body1={obj.phone}
                            image={obj.photo}
                            key={i}
                        />
                    );
                })
            }
        </div>
    );
}

export default AppointmentList;