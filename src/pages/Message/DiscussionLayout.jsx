import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
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
import useLoadingStore from "../../store/loadingStore";

const DiscussionLayout = () => {
  const { width } = useWindowSize();
  const [channel, setChannel] = useState("General");
  const [chats, setChats] = useState([]);
  const [isChatClicked, setIsChatClicked] = useState(false);
  const setLoading = useLoadingStore((state) => state.setLoading);
  const fetchData = async () => {
    try {
      setLoading(true)
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
      setLoading(false)
      //   dispatch(setLoadingFalse());
    }
  };

  useEffect(() => {
    fetchData();
    document.getElementsByClassName("rocketchat-widget")[0].style.display = "none";
    return () => {
      document.getElementsByClassName("rocketchat-widget")[0].style.display = "block";
    }
  }, []);
  return (

    <MessageContainer  >
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

  );
};
export default DiscussionLayout;
