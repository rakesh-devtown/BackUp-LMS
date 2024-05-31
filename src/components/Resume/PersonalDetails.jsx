import { useState } from "react"
import { Button, Col, Row, Space } from "antd"
import { EditOutlined } from "@ant-design/icons"
import styled from "styled-components"
import { StyledContainer, StyledHeader } from "../../styles/myResume.styles"
import ResumeModals from "../Modals/ResumeModals"
import useAuthStore from "../../store/authStore"

const PersonalDetails = () => {


  const [showModal, setShowModal] = useState(false);
  const user = useAuthStore((state) => state.user);

  const handleShowModal = () => setShowModal(!showModal)

  return (
    <StyledContainer>
      {showModal && <ResumeModals handleCancel={handleShowModal} keyItem={"personalDetails"} />}
      <StyledHeader>
        <h4>Personal Details</h4>
        <Button type="text" danger icon={<EditOutlined />} onClick={handleShowModal} className='edit-btn' >Edit</Button>
      </StyledHeader>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Row>
          <Col span={12}>
            <div>
              <h4>Name</h4>
              <p>{user?.name}</p>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <h4>Location</h4>
              <p>Bangalore, India</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <div>
              <h4>Whats App Number</h4>
              <p>7662871815</p>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <h4>Contact Number</h4>
              <p>7002175147</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div>
              <h4>Email</h4>
              <p>{user?.email}</p>
            </div>
          </Col>
        </Row>

      </div>
    </StyledContainer>
  )
}

export default PersonalDetails;