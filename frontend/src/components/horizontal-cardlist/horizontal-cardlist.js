import React from "react";
import Card from "../card/card";

import "./horizontal-cardlist.style.css"

export const HorizontalCardList = ({ cards }) => {
    return (
        <ul
            className="horizontal-cards-list"
            style={{ display: 'flex', listStyleType: 'none', padding: 0 }}
        >
            {
                cards.map((obj) => {
                    return (
                        <Card
                            className={obj.className}
                            title={obj.title}
                        />
                    );
                })
            }
        </ul >
    );
}