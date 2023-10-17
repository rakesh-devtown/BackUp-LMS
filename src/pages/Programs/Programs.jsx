import React from "react";
import { Card, Col, Row } from "antd";
import { Input, Space, Button, Layout } from "antd";
import { Typography } from "antd";
import { Progress } from "antd";
import { Tabs } from "antd";
import { Link } from "react-router-dom";
import { routeDefinitions } from "../../constants/routes";
import { FullScreenContent, StyledButton } from "../../styles/shared.styles";
const onChange = (key) => {
  console.log(key);
};
const { Title } = Typography;
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const { Meta } = Card;

const Programs = () => (
  <Layout>
    <Title style={{ padding: "10px 0px" }}> My Programs</Title>
    <Tabs
      onChange={onChange}
      type="card"
      style={{
        padding: "10px 0px",
        display: "flow",
        flexDirection: "column",
        gap: "20px",
      }}
      items={new Array(3).fill(null).map((_, i) => {
        const id = String(i + 1);
        return {
          label: `Tab ${id}`,
          key: id,
          // children: `Content of Tab Pane ${id}`,
        };
      })}
    />
    <Space direction="vertical">
      <Row gutter={24}>
        <Col
          span={8}
          style={{
            paddingBottom: "10px",
          }}
        >
          <Card
            hoverable
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src="https://student-platform-assets.s3.ap-south-1.amazonaws.com/course-images/Screenshot+2022-06-17+at+2.26.45+PM.png"
                height="176px"
                width="full"
              />
            }
          >
            <Progress percent={50} status="active" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <Meta title="Course Video" description="video" />
              <Button type="primary"> Continue</Button>
            </div>
          </Card>
        </Col>
        <Col
          span={8}
          style={{
            paddingBottom: "10px",
          }}
        >
          <Card
            hoverable
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src="https://student-platform-assets.s3.ap-south-1.amazonaws.com/course-images/Screenshot+2022-06-17+at+2.26.45+PM.png"
                height="176px"
                width="full"
              />
            }
          >
            <Progress percent={50} status="active" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <Meta title="Course Video" description="video" />
              <Button type="primary">Primary Button</Button>
            </div>
          </Card>
        </Col>
        <Col
          span={8}
          style={{
            paddingBottom: "10px",
          }}
        >
          <Card
            hoverable
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src="https://student-platform-assets.s3.ap-south-1.amazonaws.com/course-images/Screenshot+2022-06-17+at+2.26.45+PM.png"
                height="176px"
                width="full"
              />
            }
          >
            <Progress percent={50} status="active" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <Meta title="Course Video" description="video" />
              <Button type="primary">Primary Button</Button>
            </div>
          </Card>
        </Col>
        <Col
          span={8}
          style={{
            paddingBottom: "10px",
          }}
        >
          <Card
            hoverable
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src="https://student-platform-assets.s3.ap-south-1.amazonaws.com/course-images/Screenshot+2022-06-17+at+2.26.45+PM.png"
                height="176px"
                width="full"
              />
            }
          >
            <Progress percent={50} status="active" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <Meta title="Course Video" description="video" />
              <Button type="primary">Primary Button</Button>
            </div>
          </Card>
        </Col>
        <Col
          span={8}
          style={{
            paddingBottom: "10px",
          }}
        >
          <Card
            hoverable
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src="https://student-platform-assets.s3.ap-south-1.amazonaws.com/course-images/Screenshot+2022-06-17+at+2.26.45+PM.png"
                height="176px"
                width="full"
              />
            }
          >
            <Progress percent={50} status="active" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <Meta title="Course Video" description="video" />
              <Button type="primary">Primary Button</Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Space>
  </Layout>
);
export default Programs;
