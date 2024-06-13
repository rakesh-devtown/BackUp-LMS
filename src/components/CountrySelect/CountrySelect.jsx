import { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import styled from "styled-components";

const CountrySelect = ({onSelect}) => {
    const [selected, setSelected] = useState("IN");

    const decodeCountryCode = (code) => {
        switch (code) {
            case "US":
                return "United States";
            case "GB":
                return "United Kingdom";
            case "DE":
                return "Germany";
            case "FR":
                return "France";
            case "NG":
                return "Nigeria";
            case "ES":
                return "Spain";
            case "IN":
                return "India";
            default:
                return "India";
        }
    }

    return (

        <StyledReactFlagsSelect
            selected={selected}
            onSelect={(code) => onSelect(decodeCountryCode(code))}
            showSelectedLabel={false}
            showOptionLabel={false}
            fullWidth={false}
            countries={["US", "GB", "DE", "FR", "NG", "ES", "IN"]}
        />
    )
}

const StyledReactFlagsSelect = styled(ReactFlagsSelect)`
button{
    border: none;
    margin-top: 15px;
}

`


export default CountrySelect