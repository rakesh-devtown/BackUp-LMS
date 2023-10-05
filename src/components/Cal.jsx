import React, { useState } from 'react';
import { Calendar, Drawer } from 'antd';
///import {Moment} from 'moment';

const CalendarScheduler = ({ events }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleDateClick = (value) => {
    setSelectedDate(value);
    setDrawerVisible(true);
  };

  const handleCloseDrawer = () => {
    setSelectedDate(null);
    setDrawerVisible(false);
  };

  return (
    <div>
      <Calendar
        onSelect={handleDateClick}
        dateCellRender={(value) => {
          const date = value.format('YYYY-MM-DD');
          const eventForDate = events.find((event) => event.date === date);

          if (eventForDate) {
            return (
              
              <div className="event-indicator ">
                <div className="event-indicator-dot"></div>
              </div>
            );
          }

          return null;
        }}
      />

      <Drawer
        title={`Events for ${selectedDate ? selectedDate.format('MMM D, YYYY') : ''}`}
        width={400}
        placement="right"
        onClose={handleCloseDrawer}
        visible={drawerVisible}
      >
        {selectedDate &&
          events
            .filter((event) => event.date === selectedDate.format('YYYY-MM-DD'))
            .map((event) => (
              <div key={event.id}>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            ))}
      </Drawer>
    </div>
  );
};

export default CalendarScheduler;
