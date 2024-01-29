import React from "react";
import useWindowSize from "../../hooks/useWindowSixe";
import { ArrowLeftOutlined, BackwardFilled, LeftCircleFilled } from "@ant-design/icons";
import { BackButton } from "../../styles/SessionLimit.styles";
import { Button } from "antd";
import { RocketChatButton, RocketChatButtonContainer, RocketChatContainer, RocketChatContent } from "../../styles/rocketChat.styles";

function RocketChat({ channel, setIsChatClicked }) {
  const iframeRef = React.useRef(null);
  const { width } = useWindowSize();

  const goBack = () => {
    setIsChatClicked(false);
  };

  const chatToken = localStorage.getItem("chatToken");
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
<RocketChatContainer>
  {width < 640 && (
    <RocketChatButtonContainer>
      <RocketChatButton onClick={goBack}>
        <ArrowLeftOutlined  />
      </RocketChatButton>
    </RocketChatButtonContainer>
  )}
  <RocketChatContent>
  <iframe
          title="Discussion"
          ref={iframeRef}
          src={`https://codetown.in/channel/${channel}?layout=embedded`}
          frameborder="0"
          height="100%"
          width="100%"
        ></iframe>
  </RocketChatContent>
</RocketChatContainer>
  );
}

export default RocketChat;
