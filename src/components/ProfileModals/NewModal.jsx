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
      <IconButton  onClick={() => setopen(true)}>
        {props.text === "Logout" ? (
          <>
            <LogoutOutlined style={{ marginLeft: "40%" }} size={"1.3em"} />
            <p style={{ fontSize: "1em", marginTop: "8px" }}>{props.text}</p>
          </>
        ) : props.text === "Add" ? (
          <PlusOutlined  />
        ) : props.text === "Feedback" ? (
          <div
            style={{
              fontWeight: "bold",
              color: "#9865E8",
              marginTop: "80px",
              marginBottom: "80px",
              height: "200px",
              fontSize: "1.125em",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Give us your feedback
          </div>
        ) : props.text === "Edit" ? (
          <EditFilled color={"#928e8e"} size={"1.3em"} />
        ) : props.text === "Let's Continue" ? (
          <button
            onClick={() => setopen(true)}
            style={{
              marginTop: "16px",
              marginBottom: "12px",
              padding: "8px 16px",
              backgroundColor: "white",
              color: "#928e8e",
              fontWeight: "bold",
              borderRadius: "8px",
            }}
          >
            {props.text}
          </button>
        ) : props.text === "Update" ? (
          <div
            style={{
              color: "white",
              background: "linear-gradient(to bottom right, #7b68ee, #1e90ff)",
              padding: "8px 16px",
              borderRadius: "8px",
            }}
          >
            {props.text}
          </div>
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
        onCancel={()=> setopen(false)}
        footer={null}
      style={{
       
        height : "100%",
       
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
