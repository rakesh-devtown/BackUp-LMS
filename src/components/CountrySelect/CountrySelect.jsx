import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import styled from "styled-components";

const CountrySelect = () => {
    const [selected, setSelected] = useState("IN");

    console.log(selected);

    return (

        <StyledReactFlagsSelect
            selected={selected}
            onSelect={(code) => setSelected(code)}
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