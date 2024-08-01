import styled from "styled-components";
import {
  CopyOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  DownloadOutlined,
  LinkOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, Row, Space, Upload } from "antd";
import { useState } from "react";
import useWindowSize from "../../../hooks/useWindowSize";

const StatusTab = ({ handleTabChange }) => {
  const [reviewStatus, setReviewStatus] = useState("pending");
  // const [reviewStatus, setReviewStatus] = useState("reviewed");
  // const [reviewStatus, setReviewStatus] = useState("underReview");

  const { width } = useWindowSize();

  const feedback =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.";

  const myLabelStyle = {
    color: "#393939",
    fontFamily: "DM Sans",
    fontSize: "14px",
    fontWeight: 400,
  };
  const myInputStyle = {
    borderRadius: "4px",
    border: "0.75px solid #C4C4C4",
    backdropFilter: "blur(75px)",
    padding: "16px",
  };

  const handleSubmit = (data) => {
    console.log("ok");
    console.log(data);
    setReviewStatus("underReview");
    setTimeout(() => {
      setReviewStatus("reviewed");
    }, 5000);
  };

  return (
    <Container width={width}>
      <TableContainer>
        <HeaderRow>
          <Col span={6}>Status</Col>
          <Col className="border" span={6}>
            Rating
          </Col>
          <Col span={12}>Feedback on Assignment</Col>
        </HeaderRow>
        <ContentRow width={width}>
          <Col span={6}>
            <div className={`status ${reviewStatus}`}>
              <p>
                {reviewStatus === "pending" && "Pending"}
                {reviewStatus === "underReview" && "Under Review"}
                {reviewStatus === "reviewed" && "Reviewed"}
              </p>
            </div>
          </Col>
          <Col span={6}>0/10</Col>
          <Col span={12}>{reviewStatus === "reviewed" && feedback ? feedback : "-"}</Col>
        </ContentRow>
      </TableContainer>
      <Form layout="vertical" onFinish={handleSubmit}>
        <UploadContainer>
          <div className="box">
            <div className="title">Submission 1</div>
            {reviewStatus === "pending" ? (
              <Form.Item name={"submission1"}>
                <Upload>
                  <UploadBtn icon={<UploadOutlined />} iconPosition="end">
                    Choose From Computer
                  </UploadBtn>
                </Upload>
              </Form.Item>
            ) : (
              <DownloadBtn icon={<DownloadOutlined />} iconPosition={"end"}>
                Download Your File
              </DownloadBtn>
            )}

            {reviewStatus === "pending" && (
              <div className="file-format">
                <p>Maximum combined file size is 50 MB Only </p>
                <div className="dot"></div>
                <p>Only zip, pdf, doc, ppt, xls, png, jpg allowed</p>
              </div>
            )}
          </div>
          <div className="box">
            <div className="title">Submission 2</div>
            {reviewStatus === "pending" ? (
              <Form.Item name={"submission2"}>
                <Upload>
                  <UploadBtn icon={<UploadOutlined />} iconPosition="end">
                    Choose From Computer
                  </UploadBtn>
                </Upload>
              </Form.Item>
            ) : (
              <DownloadBtn icon={<DownloadOutlined />} iconPosition={"end"}>
                Download Your File
              </DownloadBtn>
            )}
            {reviewStatus === "pending" && (
              <div className="file-format">
                <p>Maximum combined file size is 50 MB Only </p>
                <div className="dot"></div>
                <p>Only zip, pdf, doc, ppt, xls, png, jpg allowed</p>
              </div>
            )}
          </div>
        </UploadContainer>
        <Divider />
        <AssignmentLinkContainer>
          <Form.Item
            name={"link"}
            label={
              <Space size={5} style={myLabelStyle}>
                <p> Assignment Link</p> <LinkOutlined />
              </Space>
            }
            rules={[
              {
                type: "url",
              },
            ]}
          >
            <Input style={myInputStyle} placeholder="Paste URL" icon={<CopyOutlined />} />
          </Form.Item>
        </AssignmentLinkContainer>
        {!(reviewStatus === "reviewed") && (
          <Form.Item style={{ display: "flex", justifyContent: "center" }}>
            <Button htmlType="submit" type="primary" size="large" style={{ padding: "16px 24px", height: "unset" }}>
              {reviewStatus === "pending" ? "Submit Project" : "Re - Submit"}
            </Button>
          </Form.Item>
        )}
      </Form>

      <ButtonDiv>
        <Button
          type="link"
          icon={<DoubleLeftOutlined style={{ fontSize: "18px" }} />}
          onClick={() => handleTabChange("2")}
        />
      </ButtonDiv>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding: ${(props) => (props.width < 576 ? "16px 10px 30px 16px" : "24px 24px 40px 24px")};
  .inner-container {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
`;

const Title = styled.h3`
  color: #3e3e3e;
  font-family: "DM Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ButtonDiv = styled.div`
  position: absolute;
  bottom: 12px;
  right: 24px;
  display: flex;
  gap: 16px;
  i {
    cursor: pointer;
    color: #0859de;
    padding: 4px;
    &:hover {
      color: #72a3f1;
      stroke-width: 20px;
    }
  }
`;

const TableContainer = styled.div`
  border-radius: 9px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  background: var(--Color-White-100, #fff);
`;

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  .ant-upload-wrapper,
  .ant-upload {
    width: 100%;
  }
  .box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    align-self: stretch;
    .file-format {
      display: flex;
      column-gap: 12px;
      align-items: center;
      color: #393939;
      font-family: "DM Sans";
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .dot {
      height: 6px;
      width: 6px;
      border-radius: 50%;
      background-color: black;
    }
  }
`;

const HeaderRow = styled(Row)`
  background: #f0f6ff;
  border-radius: 9px;
  .ant-col {
    display: flex;
    height: 65px;
    padding: 20px 16px;
    justify-content: center;
    align-items: center;
    color: #262626;
    font-family: "DM Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .border {
    border: none;
    border-left: 1.5px solid white;
    border-right: 1.5px solid white;
  }
`;

const ContentRow = styled(Row)`
  .ant-col {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    color: #3e3e3e;
    text-align: center;
    font-family: "DM Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    .status {
      padding: ${(props) => (props.width < 576 ? "5px 8px" : "12px 18px")};
      border-radius: 4px;
      width: 140px;
      text-align: center;
      font-family: "DM Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .status.pending {
      background-color: #fff4f4;
      color: #b84437;
    }
    .status.reviewed {
      color: #008022;
      background-color: #ceffdb;
    }
    .status.underReview {
      color: #ff8a00;
      background-color: #ffe7ca;
    }
  }
`;

const UploadBtn = styled(Button)`
  padding: 32px 16px;
  height: unset;
  border-radius: 4px;
  border: 0.75px dashed #c4c4c4;
  backdrop-filter: blur(75px);
  color: #393939;
  text-align: center;
  font-family: "DM Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const DownloadBtn = styled(Button)`
  display: flex;
  height: unset;
  width: 100%;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const AssignmentLinkContainer = styled.div``;
export default StatusTab;
