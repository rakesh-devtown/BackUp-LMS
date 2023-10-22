import React, { useState } from 'react';
import { Calendar, Menu,  theme  } from 'antd';
import {
  addDays,
  subDays,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  isWithinInterval,
} from 'date-fns';


import {
  customMenuStyle,
  dateInputsStyle,
  inputStyle,
  highlightedDateCellStyle,
} from '../../styles/AttendanceCalendar.styles.js';
import Title from 'antd/es/typography/Title.js';
import ProgressBar from './ProgressBar.jsx';

function AttendanceCalendar() {
    const { token } = theme.useToken();
    const wrapperStyle = {
        width: 300,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
      };
  const [selectedDate, setSelectedDate] = useState(null);
  const [daysUpToToday, setDaysUpToToday] = useState(0);
  const [daysStartingToday, setDaysStartingToday] = useState(0);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDaysUpToTodayChange = (e) => {
    const days = parseInt(e.target.value, 10);
    setDaysUpToToday(days);
  };

  const handleDaysStartingTodayChange = (e) => {
    const days = parseInt(e.target.value, 10);
    setDaysStartingToday(days);
  };
  

  const selectToday = () => {
    handleDateChange(new Date());
  };

  const selectYesterday = () => {
    handleDateChange(subDays(new Date(), 1));
  };

  const selectThisWeek = () => {
    const startDate = startOfWeek(new Date(), { weekStartsOn: 1 });
    const endDate = endOfWeek(new Date(), { weekStartsOn: 1 });
    handleDateChange({ startDate, endDate });
  };

  const selectLastWeek = () => {
    const startDate = startOfWeek(subDays(new Date(), 7), { weekStartsOn: 1 });
    const endDate = endOfWeek(subDays(new Date(), 7), { weekStartsOn: 1 });
    handleDateChange({ startDate, endDate });
  };

  const selectThisMonth = () => {
    const startDate = startOfMonth(new Date());
    const endDate = endOfMonth(new Date());
    handleDateChange({ startDate, endDate });
  };

  const dateCellRender = (date) => {
    if (
      daysUpToToday > 0 &&
      isWithinInterval(date, subDays(new Date(), daysUpToToday), new Date())
    ) {
      return <div style={highlightedDateCellStyle} />;
    }
    if (
      daysStartingToday > 0 &&
      isWithinInterval(date, new Date(), addDays(new Date(), daysStartingToday))
    ) {
      return <div style={highlightedDateCellStyle} />;
    }
    return null;
  };

  return (
    <div>
    <Title level={4}>Attendence</Title>
    <div style={{display:'flex', justifyContent:'space-between'}} >
    
    <div style={{display:'flex'}}>
    
      <div style={customMenuStyle}>
        <Menu mode="vertical">
          <Menu.Item onClick={selectToday}>Today</Menu.Item>
          <Menu.Item onClick={selectYesterday}>Yesterday</Menu.Item>
          <Menu.Item onClick={selectThisWeek}>This Week</Menu.Item>
          <Menu.Item onClick={selectLastWeek}>Last Week</Menu.Item>
          <Menu.Item onClick={selectThisMonth}>This Month</Menu.Item>
        </Menu>
        <div style={dateInputsStyle}>
        <div style={{display:'flex',alignContent:'center',alignItems:'center'}}>
          <input
         


            type="number"
            placeholder="Days Up To Today"
            value={daysUpToToday}
            onChange={handleDaysUpToTodayChange}
            style={inputStyle}
          /><p>days upto today</p>
        </div>
        <div style={{display:'flex',alignContent:'center',alignItems:'center'}}>
          <input
            type="number"
            placeholder="Days Starting Today"
            value={daysStartingToday}
            onChange={handleDaysStartingTodayChange}
            style={inputStyle}
          /><p>days from today</p>
        </div>
      </div>
      </div>
     
      <div style={wrapperStyle}>
      <Calendar fullscreen={false}
        onSelect={handleDateChange}
        dateCellRender={dateCellRender}
        value={selectedDate}
      />
      </div>
    </div>
    <div style={{borderStyle:'solid 2px ',borderColor:'grey', borderRadius:'5rem'}}>
    <ProgressBar/>
    </div>
    </div>
    </div>
  );
}

export default AttendanceCalendar;
