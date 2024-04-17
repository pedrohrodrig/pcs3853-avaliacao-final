import React from "react";
import HorizontalCard from "../../horizontalcard/horizontalcard";

import "../cardlist.css";

function PaymentList({ className, payments, small, to }) {
    const classes = small ? `small-card-list ${className}` : `card-list ${className}`;
    const n = small ? 3 : payments.length;

    return (
        <div className={classes}>
            {
                payments.map((obj, i) =>
                {
                    while (i < n) {
                        return (
                            <HorizontalCard
                                title={obj.patientName}
                                body={!small && `Valor: R$ ${obj.value}`}
                                iconType={obj.status === "Pago" ? 'check' : 'x'}
                                col1={!small && `Status: ${obj.status}`}
                                col2={!small && obj.fine > 0 && `Multa: R$ ${obj.fine}`}
                                key={i}
                            />
                        );
                    }
                })
            }
        </div>
    );
}

export default PaymentList;
