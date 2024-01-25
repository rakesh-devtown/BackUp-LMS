import React, { Children, cloneElement, useEffect, useState } from "react";
import IconButton from "../ui/IconButton";
import {
  CloseCircleFilled,
  EditFilled,
  FormatPainterFilled,
  LogoutOutlined,
  PlusCircleFilled,
  PlusOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import {
  NewModalButton,
  NewModalFeedbackContainer,
  NewModalLogoutText,
  NewModalUpdateContainer,
} from "../../styles/newModal.styles";

function NewModal(props) {
  const [open, setopen] = useState(false);
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflowY = "hidden";
      document.body.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "";
      document.body.style.overflowY = "";
    }
  }, [open]);
  //render function to clone the children with new prop
  //setopen prop is passed from parent to children component
  //this is done to close the modal from the children
  const renderElements = () => {
    return Children.map(props.children, (child) => {
      return cloneElement(child, {
        setopen,
        about: props.about,
      });
    });
  };
  return (
    <>
      <IconButton onClick={() => setopen(true)}>
        {props.text === "Logout" ? (
          <>
            <LogoutOutlined style={{ marginLeft: "40%" }} size={"1.3em"} />
            <NewModalLogoutText>{props.text}</NewModalLogoutText>
          </>
        ) : props.text === "Add" ? (
          <PlusOutlined />
        ) : props.text === "Feedback" ? (
          <NewModalFeedbackContainer>
            Give us your feedback
          </NewModalFeedbackContainer>
        ) : props.text === "Edit" ? (
          <EditFilled color={"#928e8e"} size={"1.3em"} />
        ) : props.text === "Let's Continue" ? (
          <NewModalButton onClick={() => setopen(true)}>
            {props.text}
          </NewModalButton>
        ) : props.text === "Update" ? (
          <NewModalUpdateContainer>{props.text}</NewModalUpdateContainer>
        ) : (
          <EditFilled
            style={{ float: "right", marginRight: "28px", color: "#928e8e" }}
            size={"1.3em"}
          />
        )}
      </IconButton>
      {open ? (
        <>
          <Modal
            open={open}
            onCancel={() => setopen(false)}
            footer={null}
            style={{
              height: "100%",
            }}
            title={props.mainSub}
          >
            {renderElements()}
          </Modal>
        </>
      ) : null}
    </>
  );
}

export default NewModal;
