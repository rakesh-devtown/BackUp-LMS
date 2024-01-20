import React, { useCallback, useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import { Input, Space, Button, Layout } from "antd";
import { Typography } from "antd";
import { Progress } from "antd";
import { Tabs } from "antd";
import useProgramStore from "../../store/programStore";
import { Link, useNavigate } from "react-router-dom";
import useBatchStore from "../../store/batchStore";
import useAuthStore from "../../store/authStore";
import useLoadingStore from "../../store/loadingStore";
import "./Programs.css";
const { Title } = Typography;
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const { Meta } = Card;

const arr = [
  { type: "all", name: "All Courses" },
  { type: "bootcamp", name: "Bootcamps" },
  { type: "classroom", name: "Classrooms" },
  { type: "video", name: "Videos" },
];

const Programs = () => {
  
  const [type, setType] = useState("all");
  const [batch, setBatches] = useState([]); 
  const navigate = useNavigate();

  const name = useProgramStore(state => state.name);
  const getCurrentBatch = useBatchStore((state) => state.getCurrentBatch);
  const allBatches = useProgramStore(state  => state.allBatches)
  const getAllbatches = useProgramStore.getState().getAllbatches;
  const setCurrentBatchId = useBatchStore(state => state.setCurrentBatchId);
  const setLoading = useLoadingStore(state => state.setLoading);
  const handleGetAllBatches = useCallback(async () => {
    setLoading(true);
     await getAllbatches();
     setLoading(false);
  }, [getAllbatches, setLoading]);


  const handleGetBatches = useCallback( () => {
    if (type === "all") {
      if (name === "") setBatches(allBatches);
      else
        setBatches(
          allBatches.filter((batch) => {
            if (batch?.name.toLowerCase().includes(name.toLowerCase()))
              return batch;
          })
        );
    } else {
      if (name === "")
        setBatches(
          allBatches.filter((batch) => {
            if (batch.course.courseType === type) return batch;
          })
        );
      else
        setBatches(
          allBatches.filter((batch) => {
            if (
              batch.course.courseType === type &&
              batch?.name.toLowerCase().startsWith(name.toLowerCase())
            )
              return batch;
          })
        );
    }
  }, [allBatches, name, type]
  )

  const handleNavigate = async  ( id  ,courseType  , course) =>  {
    console.log(id , courseType)
    setCurrentBatchId(id); 
    await getCurrentBatch(id); 


    navigate(`${courseType=== "classroom" ? "/program" : "/video"}` , {state:{thumbnail : course.image}})

  }
  useEffect(() => {

    handleGetBatches();

  }, [type, handleGetBatches, name ,allBatches]);
  useEffect(() => {

    handleGetAllBatches();
  }, [handleGetAllBatches]);


  if (!batch.length)
    return (
      <Layout>
        
        <Title style={{ padding: "10px 0px" }}> My Programs</Title>

        <Tabs
          onChange={(key) => {
            setType(key);
          }}
          type="card"
          style={{
            padding: "10px 0px",
            display: "flow",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {arr.map((item, i) => (
            <Tabs.TabPane tab={item.name} key={item.type} />
          ))}
        </Tabs>
        <Space direction="vertical">
          <Row gutter={24}>
            <Title
              style={{
                margin: "auto",
              }}
            >
              No batches in this Section{" "}
            </Title>
          </Row>
        </Space>
      </Layout>
    );

  return (
    <Layout>
      <Title style={{ padding: "10px 0px" }}> My Programs</Title>

      <Tabs
        onChange={(key) => {
          setType(key);
        }}
        type="card"
        style={{
          padding: "10px 0px",
          display: "flow",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {arr.map((item, i) => (
          <Tabs.TabPane tab={item.name} key={item.type} />
        ))}
      </Tabs>
      <Space direction="vertical">
        <Row
          gutter={24}
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems:"stretch",
          }}
        >
          {batch.map((batch, idx) => (
            <Col
              key={batch._id}
              style={{
                paddingBottom: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "stretch",
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
                    src={batch?.course?.image}
                    height="176px"
                    width="full"
                  />
                }
              >
                <Progress percent={50} status="active" />
                <div
                  style={{
                    display: "flex",
                    // justifyContent: "space-between",
                    alignItems: "start",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  
                  {/* <Meta classNam  e="meta" title={batch?.name +"askjfdbsadjhfbsdajhfbhjkvb"} /> */}
                  <Meta className="meta" title={batch?.name} description={batch?.course?.name} />
                    <Button onClick={()=> handleNavigate(batch._id , batch?.course?.courseType , batch?.course) } type="primary"> Continue</Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    </Layout>
  );
};
export default Programs;
