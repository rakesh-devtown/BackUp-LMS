import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSixe";
import { serviceGet } from "../../utils/api";
import ChatSidebar from "./ChatSidebar";
import RocketChat from "./RocketChat";

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
  return <div style={{ width: '100%',   height: '100%', backgroundColor: 'white', display: 'flex' }}>
  {width > 740 ? (
    <>
      <div style={{ width: '300px' }}>
        <ChatSidebar channel={{ channel, setChannel }} chats={chats} />
      </div>
      <div style={{ width: '100%' }}>
        <RocketChat channel={channel} />
      </div>
    </>
  ) : (
    <>
      {isChatClicked ? (
        <div style={{ width: '100%' }}>
          <RocketChat
            channel={channel}
            setIsChatClicked={setIsChatClicked}
          />
        </div>
      ) : (
        <div style={{ width: '100%', height: '100%' }}>
          <ChatSidebar
            channel={{ channel, setChannel }}
            chats={chats}
            setIsChatClicked={setIsChatClicked}
          />
        </div>
      )}
    </>
  )}
</div>;
};
export default DiscussionLayout;
