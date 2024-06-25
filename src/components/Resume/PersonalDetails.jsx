import { useEffect, useState } from "react";
import { Button, Col, Row, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { StyledContainer, StyledHeader } from "../../styles/myResume.styles";
import ResumeModals from "../Modals/ResumeModals";
import useAuthStore from "../../store/authStore";
import useResumeStore from "../../store/resumeStore";

const PersonalDetails = () => {
  const personalDetails = useResumeStore((state) => state.personalDetails);
  const [showModal, setShowModal] = useState(false);
  const user = useAuthStore((state) => state.user);
  const [loading, setLoading] = useState(false);

  const handleShowModal = () => setShowModal(!showModal);

  // const fetchPersonalDetailsOfResume = async () => {
  //   try {
  //     setLoading(true);
  //     await fetchPersonalDetails();
  //   } catch (err) {
  //     console.log(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(()=>{
  //   fetchPersonalDetailsOfResume();
  // },[])

  return (
    <StyledContainer>
      {showModal && <ResumeModals handleCancel={handleShowModal} keyItem={"personalDetails"} />}
      <StyledHeader>
        <h4>Personal Details</h4>
        <Button type="text" danger icon={<EditOutlined />} onClick={handleShowModal} className="edit-btn" />
      </StyledHeader>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Row>
          <Col span={12}>
            <div>
              <h4>Name</h4>
              <p>{personalDetails?.name}</p>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <h4>Location</h4>
              <p>{personalDetails?.location}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <div>
              <h4>Whats App Number</h4>
              <p>{personalDetails?.whatsappNo}</p>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <h4>Contact Number</h4>
              <p>{personalDetails?.contactNo}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div>
              <h4>Email</h4>
              <p>{personalDetails?.email}</p>
            </div>
          </Col>
        </Row>
      </div>
    </StyledContainer>
  );
};

export default PersonalDetails;
