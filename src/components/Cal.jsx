import React from "react";
import { StyledCaledar } from "../styles/calendar.styles";
const Cal = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  return (
    <StyledCaledar
      className="my-schedule-calendar"
      onPanelChange={onPanelChange}
    />
  );
};
export default Cal;
