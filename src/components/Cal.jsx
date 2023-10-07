import React, { useState } from "react";
import { Drawer, Button, Card } from "antd";
import { StyledCalendar } from "../styles/calendar.styles";

const CalendarScheduler = ({ events }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDateClick = (value) => {
    setSelectedDate(value);
    const date = value.format("YYYY-MM-DD");
    const eventsForDate = events.filter((event) => event.date === date);
    setSelectedEvent(eventsForDate[0] || null);
    setDrawerVisible(true);
  };

  const handleCloseDrawer = () => {
    setSelectedDate(null);
    setSelectedEvent(null);
    setDrawerVisible(false);
  };

  const dateCellRender = (value) => {
    const date = value.format("YYYY-MM-DD");
    const eventsForDate = events.filter((event) => event.date === date);

    return (
      <div className="date-cell">
        {eventsForDate.length > 0 && (
          <div className="event-title">
            {eventsForDate[0].topic}
          </div>
        )}
       {/* // {value.date()} */}
      </div>
    );
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

export default CalendarScheduler;
