import React from "react";
import {
  ChatImage,
  ChatName,
  ChatSideBarInnerContainer,
  ChatTabs,
  ImageContainer,
  MessageInnerContainer,
  MessageSideBarContainer,
  MessageSideBarGeneralHeading,
  MessageSideBarTabs,
  MessageStyledChatHeading,
  TabImage,
} from "../../styles/message.styles";

function ChatSidebar({ chats, channel, setIsChatClicked }) {
  const handleChatClick = (discussionChannelName) => {
    channel.setChannel(discussionChannelName);
    try {
      setIsChatClicked(discussionChannelName);
    } catch (error) {
      console.warn("Is Channel Clicked");
    }
  };
  return (
    <MessageSideBarContainer>
      <MessageInnerContainer>
        <MessageStyledChatHeading>Chats</MessageStyledChatHeading>

        <MessageSideBarTabs
          channel={channel.channel}
          onClick={() => handleChatClick("General")}
        >
          <ImageContainer>
            <TabImage
              src={"https://cdn-icons-png.flaticon.com/512/6069/6069809.png"}
              alt={"general"}
            />
            <MessageSideBarGeneralHeading>General</MessageSideBarGeneralHeading>
          </ImageContainer>
        </MessageSideBarTabs>

        {chats.map((chat, index) => (
          <ChatTabs
            key={index}
            channel={channel.channel}
            discussionChannelName={chat.discussionChannelName}
            onClick={() => handleChatClick(chat.discussionChannelName)}
          >
            <ChatSideBarInnerContainer>
              <ChatImage src={chat.image} alt={chat.name} />
              <ChatName>{chat.name}</ChatName>
            </ChatSideBarInnerContainer>
          </ChatTabs>
        ))}
      </MessageInnerContainer>
    </MessageSideBarContainer>
  );
}

export default ChatSidebar;
