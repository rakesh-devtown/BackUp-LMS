import React, { useEffect, useState } from "react";
import { Calendar, Menu, notification, theme } from "antd";
import {
  addDays,
  subDays,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  isWithinInterval,
} from "date-fns";

import {
  customMenuStyle,
  dateInputsStyle,
  inputStyle,
  highlightedDateCellStyle,
} from "../../styles/AttendanceCalendar.styles.js";
import Title from "antd/es/typography/Title.js";
import ProgressBar from "./ProgressBar.jsx";
import AttendanceTable from "./AtttendanceTable.jsx";
import { serviceGet } from "../../utils/api.js";
import useBatchStore from "../../store/batchStore.js";
import { setHeader } from "../../utils/header.js";
import useLoadingStore from "../../store/loadingStore.js";

function AttendanceCalendar() {
  const [data, setData] = useState([]);
  const currentBatchId = useBatchStore((state) => state.currentBatchId);
  const [chartData, setChartData] = useState({});
  const setLoading = useLoadingStore((state) => state.setLoading);
  const handleGetAttendance = async () => {
    try {
      setLoading(true)
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      const {
        data: { sessions },
      } = await serviceGet(
        `student/student-api/v1/batch/attendance?batchId=${currentBatchId}`
      );
      const thresholdToAttendance = 1800;
      if (sessions) {
        setData(
          sessions
            // uncomment this
            .filter((s) => {
              return new Date(s.date) < Date.now();
            })
            .map((s) => {
              return {
                topic: s?.topic,
                date: new Date(s.date),
                attendance:
                  !s?.attendance ||
                  s?.attendance?.duration / 60 < s?.sessionDuration * 0.7 ||
                  s?.attendance?.duration < thresholdToAttendance
                    ? false
                    : true,
                sessionDuration: s?.sessionDuration,
                partialPresence: s?.sessionDuration
                  ? s?.attendance?.duration / 60 < s?.sessionDuration * 0.7
                  : s?.attendance?.duration < thresholdToAttendance,
                duration: s?.attendance?.duration / 60,
              };
            })
        );
      }
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.message,
      });
    } finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    const totalClasses = data.length;
    const attendedClasses = data.filter((item) => item.attendance).length;
    const percentage = ((attendedClasses / totalClasses) * 100).toFixed(2);

    setChartData({
      totalClasses,
      attendedClasses,
      percentage,
    });

  }, [data]);
  console.log(chartData)
  useEffect(() => {
    handleGetAttendance();
  }, []);
  return (
    <div>
      <Title level={4}>Attendence</Title>
      <div
        style={{
          display: "flex",
          gap : "4px" ,
          flexDirection: window.innerWidth <= 1163 ? "column" : "row",
          justifyContent: "space-around",
        }}
      >
        <div style={{ display: "flex" }}>
          <AttendanceTable data={data} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent : "center" , alignItems : "center", 
            borderStyle: "solid 2px ",
            borderColor: "grey",
            borderRadius: "5rem",
          }}
        >
          <ProgressBar percent={chartData.percentage} />
        </div>
      </div>
    </div>
  );
}

export default AttendanceCalendar;
