import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import { getFormattedDate } from "../../utils/getFormattedDateObj";
// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     key: "age",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     key: "address",
//   },
//   {
//     title: "Tags",
//     key: "tags",
//     dataIndex: "tags",
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? "geekblue" : "green";
//           if (tag === "loser") {
//             color = "volcano";
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: "Action",
//     key: "action",
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];
// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//     tags: ["nice", "developer"],
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//     tags: ["loser"],
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
// ];
const AttendanceTable = ({ data }) => {
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
          <div
            className={`max-width-[80%] text-[#A076E0] truncate m-auto absolute`}
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
          </div>
        ),
    },
  ];
  return (
    <Table
    scroll={{ x: true }}
      pagination={{
        position: "topRight",
      }}
      columns={columns}
      dataSource={tabledata}
    />
  );
};
export default AttendanceTable;
