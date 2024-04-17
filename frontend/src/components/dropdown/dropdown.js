import React from "react";
import Select from "react-select";
import "./dropdown.css";

const Dropdown = ({ className, title, placeholder, options, handleSelectedOptions, selectedOption }) => {
    const classes = `textinput ${className}`;

    return (
        <div className={classes}>
            <h1 className="title">{title}</h1>
            <Select
                className="react-select input"
                classNamePrefix="react-select"
                placeholder={placeholder}
                options={options}
                onChange={handleSelectedOptions}
                value={selectedOption}
                defaultValue={selectedOption}
                isSearchable={true}
            />
        </div>
    );
};

export default Dropdown;
