import React from 'react';

const Dropdown = ({ options, handleChange }) => {
    return (
        <select style={{ border: "2px solid", borderRadius: "4px", padding: "8px 0", marginRight: "8px" }} required onChange={handleChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value} name={option.label}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;