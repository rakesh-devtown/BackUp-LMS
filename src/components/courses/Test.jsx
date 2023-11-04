import React from "react";
import { Divider, List, Typography, Button } from "antd";
import test from '../../assets/images/test.svg'
import KebabMenu from "./KebabMenu";

const data = ["Test1 ", "Test2 ", "Test3 "];
const Test = () => (
  <>
    <List style={{width:'50%'}}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          style={{
            display: "flex",
            height: "5rem ",
            alignContent: "flex-start",
            justifyContent: "left",
            
          }}
        >
         <img src='test' alt=""/>          
          <Typography.Text mark></Typography.Text> {item}
          <Button type="primary" style={{ marginLeft: "3rem" }}>
            Upcoming
          </Button>
          <KebabMenu/>
        </List.Item>
      )}
    />
  </>
);
export default Test;
