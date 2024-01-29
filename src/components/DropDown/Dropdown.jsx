import React from 'react';
import styled from 'styled-components';
const StyledSelect = styled.select`
  border: 2px solid;
  border-radius: 4px;
  padding: 8px 0;
  margin-right: 8px;
`;
const Dropdown = ({ options, handleChange }) => {
    return (
        <StyledSelect required onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value} name={option.label}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    );
};

export default Dropdown;