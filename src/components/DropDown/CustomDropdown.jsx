import React from 'react';
import Dropdown from './Dropdown';
import { months, years } from '../../utils/monthyear';

const CustomDropdown = ({ type, value, handleChange, name }) => {
    const options = type === 'month' ? months : years;
    return (
        <Dropdown
            options={options}
            handleChange={handleChange}
            value={value}
            name={name}
        />
    );
};

export default CustomDropdown;