import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import { getFormattedDate } from "../../utils/getFormattedDateObj";
import useWindowSize from "../../hooks/useWindowSize";
import { PartialPresenceContainer } from "../../styles/shared.styles";

const AttendanceTable = ({ data }) => {
  const { width } = useWindowSize();
  const tabledata = data.map((item, index) => {
    return {
      key: index,
      date: getFormattedDate(item.date),
      topic: item.topic,
      duration: item.sessionDuration ? item.sessionDuration : 0,
      attendance: item?.attendance ? "Present" : "Absent",
      partialPresence: item.partialPresence,
    };
  });
  const columns = [
    // ...existing columns
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Topic",
      dataIndex: "topic",
      key: "topic",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Attendance",
      dataIndex: "attendance",
      key: "attendance",
      render: (attendance) => (
        <Tag color={attendance === "Present" ? "green" : "red"}>
          {attendance}
        </Tag>
      ),
    },
    {
      title: "PartialPresence",
      dataIndex: "partialPresence",
      key: "partialPresence",
      render: (partialPresence, row) =>
        partialPresence && (
          <PartialPresenceContainer

            data-tooltip-id="my-tooltip-inline"
            data-tooltip-content={
              row.duration < row.sessionDuration * 0.7
                ? "You were present for less than 70% of the session"
                : "You were present for less than 30 minutes in the meeting"
            }
            data-tooltip-place="left"
            data-tooltip-variant="light"
          >
            Yes
          </PartialPresenceContainer>
        ),
    },
  ];
  return (
    <Table
      scroll={{ x: "700" }}
      pagination={{
        position: "topRight",
      }}
      columns={columns}
      dataSource={tabledata}
    />
  );
};
export default AttendanceTable;
