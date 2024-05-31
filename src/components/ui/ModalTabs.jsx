import React from "react";
import { Tabs } from "antd";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Overview",
  },
  {
    key: "2",
    label: "Cirriculum",
  },
  {
    key: "3",
    label: "Certificates",
  },
  {
    key: "4",
    label: "Instructors",
  },
];
const ModalTabs = () => (
  <Tabs
    centered
    style={{
      width: "100%",
      marginTop: "30px",
      display: "flex",
    }}
    defaultActiveKey="1"
    items={items}
    onChange={onChange}
  />
);
export default ModalTabs;
