import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSixe";
import { serviceGet } from "../../utils/api";
import ChatSidebar from "./ChatSidebar";
import RocketChat from "./RocketChat";
import {
  ChatSideBarOuterContainer,
  MessageContainer,
  RocketChatOuterContainer,
  SmallChatSideBarContainer,
} from "../../styles/message.styles";
import { MessageOuterContainer } from "../../styles/rocketChat.styles";

const DiscussionLayout = () => {
  const { width } = useWindowSize();
  const [channel, setChannel] = useState("General");
  const [chats, setChats] = useState([]);
  const [isChatClicked, setIsChatClicked] = useState(false);

  const fetchData = async () => {
    try {
      //   dispatch(setLoadingTrue());
      const { data } = await serviceGet(
        "student/student-api/v1/batch/discussion"
      );
      const batches = data.batches;
      const chatData = batches.map((batch) => ({
        name: batch.name,
        image: batch.profile,
        discussionChannelName: batch.discussionChannelName,
      }));
      setChats(chatData);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      //   dispatch(setLoadingFalse());
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <MessageContainer>
        {width > 740 ? (
          <>
            <ChatSideBarOuterContainer>
              <ChatSidebar channel={{ channel, setChannel }} chats={chats} />
            </ChatSideBarOuterContainer>
            <RocketChatOuterContainer>
              <RocketChat channel={channel} />
            </RocketChatOuterContainer>
          </>
        ) : (
          <>
            {isChatClicked ? (
              <RocketChatOuterContainer>
                <RocketChat
                  channel={channel}
                  setIsChatClicked={setIsChatClicked}
                />
              </RocketChatOuterContainer>
            ) : (
              <SmallChatSideBarContainer>
                <ChatSidebar
                  channel={{ channel, setChannel }}
                  chats={chats}
                  setIsChatClicked={setIsChatClicked}
                />
              </SmallChatSideBarContainer>
            )}
          </>
        )}
      </MessageContainer>
    </>
  );
};
export default DiscussionLayout;
