import React, { useContext } from "react";
import HorizontalCard from "../../horizontalcard/horizontalcard";
import PathContext from "../../../contexts/PathContext";

import "../cardlist.css";

function PatientList({ className, patients, small, to }) {
    const classes = small ? `small-card-list ${className}` : `card-list ${className}`;
    const n = small ? 3 : patients.length;
    const { paths } = useContext(PathContext);

    return (
        <div className={classes}>
            {
                patients.map((obj, i) =>
                {
                    const date = new Date(obj.date_of_birth);
                    const diff_ms = Date.now() - date.getTime();
                    const age_dt = new Date(diff_ms);
                    const age = Math.abs(age_dt.getUTCFullYear() - 1970);
                    const phone = `(${obj.phone_number.slice(0, 2)}) ${obj.phone_number.slice(2)}`;

                    if (i < n) {
                        return (
                          <HorizontalCard
                            title={obj.name}
                            body={!small && `Idade ${age}`}
                            image="/images/user.jpeg"
                            col1={!small && phone}
                            col2={!small && obj.email}
                            to={to ? to : `${paths.front}/patient?id=${obj.id}`}
                            key={i}
                          />
                        );
                    }
                })
            }
        </div>
    );
}

export default PatientList;
