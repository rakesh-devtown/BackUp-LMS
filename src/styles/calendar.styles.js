import styled from 'styled-components';
import { Calendar } from "antd";


export const StyledCaledar = styled(Calendar)`
    background: #111;
    .ant-picker-cell{
        background:orange;
        &:hover{
            background:purple;
        }
        
    }
`