import React from "react";

function ChatSidebar({ chats, channel, setIsChatClicked }) {
  const handleChatClick = (discussionChannelName) => {
    channel.setChannel(discussionChannelName);
    try {
      console.log("discussionChannelName" , discussionChannelName)
      setIsChatClicked(discussionChannelName);
    } catch (error) {
      console.warn("Is Channel Clicked")
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#1F2937",
        color: "white",
        height: "100vh",

        width: "100%",
      }}
    >
      <div style={{ overflowY: "auto", overflowX: "hidden" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            fontWeight: "bold",
            padding: "10px",
          }}
        >
          Chats
        </h2>
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            margin: "4px",
            padding: "1px",
            paddingBottom: "2px",
            borderBottom: "1px solid gray",
            backgroundColor: channel.channel === "general" ? "gray" : "",
          }}
          onClick={() => handleChatClick("General")}
        >
          <div style={{ display: "flex", alignItems: "center"  ,padding:"10px"}}>
            <img
              src={"https://cdn-icons-png.flaticon.com/512/6069/6069809.png"}
              alt={"general"}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginRight: "4px",
              }}
            />
            <div style={{ flexGrow: 1, flexDirection: "row" }}>
              <div style={{ color: "white", fontSize : "25px" , fontWeight :"400" }}>General</div>
            </div>
          </div>
        </div>
        {chats.map((chat, index) => (
          <div
            key={index}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              margin: "4px",
              padding: "1px",
              paddingBottom: "2px",
              borderBottom: "1px solid gray",
              backgroundColor:
                channel.channel === chat.discussionChannelName ? "gray" : "",
            }}
            onClick={() => handleChatClick(chat.discussionChannelName)}
          >
            <div style={{ display: "flex", alignItems: "center", fontSize : "20px" , gap:"5px", padding:"10px" }}>
              <img
                src={chat.image}
                alt={chat.name}
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  marginRight: "4px",
                }}
              />
              <div style={{ flexGrow: 1, flexDirection: "row" }}>
                <div style={{ color: "white" }}>{chat.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatSidebar;
