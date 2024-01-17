import React from "react";
import useWindowSize from "../../hooks/useWindowSixe";
import { ArrowLeftOutlined, BackwardFilled, LeftCircleFilled } from "@ant-design/icons";
import { BackButton } from "../../styles/SessionLimit.styles";
import { Button } from "antd";

function RocketChat({ channel, setIsChatClicked }) {
  console.log("channel" , channel)
  const iframeRef = React.useRef(null);
  const { width } = useWindowSize();
  console.log(width)

  const goBack = () => {
    setIsChatClicked(false);
  };

  const chatToken = localStorage.getItem("chatToken");
  console.log(chatToken);
  React.useEffect(() => {
    const iframe = iframeRef.current;
    const iframeWindow = iframe.contentWindow;
    window.addEventListener("message", function (e) {
      if (e.data.eventName === "startup") {
        iframeWindow.postMessage(
          {
            externalCommand: "login-with-token",
            token: chatToken,
          },
          "*"
        );
      }
    });
  }, [iframeRef]);
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "sidebar",
        height: "100vh",
        position: "relative",
      }}
    >
      {width < 640 && (
        <div
          style={{

            zIndex: "10",
            
            position: "absolute",
            left: "2px",
            top: "3px",
          }}
        >

          <Button

            onClick={goBack}
            style={{
              padding : 0, 
              cursor: "pointer",
              border:"none",
              color: "white",
              fontSize: "30px",
              
              background:"transparent"

            }}
          >
                
            
              <LeftCircleFilled  />

          </Button>
        </div>
      )}

      <div
        style={{
          marginTop: "0",
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "between",
          alignItems: "center",
        }}
      >
        <iframe
          title="Discussion"
          ref={iframeRef}
          src={`https://codetown.in/channel/${channel}?layout=embedded`}
          frameborder="0"
          height="100%"
          width="100%"
        ></iframe>
      </div>
    </div>
  );
}

export default RocketChat;
