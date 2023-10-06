import styled from 'styled-components';
import { Calendar } from 'antd';

export const StyledCalendar = styled(Calendar)`
  .event-date-cell {
   
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px; /* Height of the rectangular strip */
    background-color: #5833ff; /* Color of the rectangular strip */
  }

  .date-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
  }
`;
