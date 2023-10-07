import React from "react";
import { StyledCaledar } from "../styles/calendar.styles";
const Cal = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return (
    <div>
      <StyledCalendar
        onSelect={handleDateClick}
        dateCellRender={dateCellRender}
      />

      <Drawer
        title={`Classes for ${
          selectedDate ? selectedDate.format("MMM D, YYYY") : ""
        }`}
        width={400}
        placement="right"
        onClose={handleCloseDrawer}
        visible={drawerVisible}
      >
        {selectedEvent && (
          <Card
            title={`Title: ${selectedEvent.topic}`}
            style={{
              width: 300,
            }}
          >
            <p>Description: {selectedEvent.description}</p>
            <p>Instructor: {selectedEvent.instructor}</p>
            <Button type="primary">Join</Button>
          </Card>
        )}
      </Drawer>
    </div>
  );
};
export default Cal;
