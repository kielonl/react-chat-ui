import React from "react";
import "./chat.css";
const Chat = () => {
  return (
    <div className="body">
      <div className="left-bar">1</div>

      <div className="right-bar">
        <div className="channel-info-bar">
          <div class="channel-info-name">Channel Name</div>
        </div>

        <div className="chat-window">
          <div className="messages">
            <div className="message-block-not-my">nie moja wiadomosc</div>
            <div className="message-block-my">moja wiadomosc</div>
            <div className="message-block-not-my">
              nie moja wiadomoscnie moja wiadomoscnie moja wiadomoscnie moja
              wiadomoscnie moja wiadomoscnie moja wiadomosc
            </div>
            <div className="message-block-my">moja wiadomosc</div>
            <div className="message-block-not-my">nie moja wiadomosc</div>
            <div className="message-block-my">moja wiadomosc</div>
            <div className="message-block-not-my">nie moja wiadomosc</div>
            <div className="message-block-my">moja wiadomosc</div>
            <div className="message-block-not-my">nie moja wiadomosc</div>
            <div className="message-block-my">moja wiadomosc</div>
            <div className="message-block-not-my">nie moja wiadomosc</div>
            <div className="message-block-my">moja wiadomosc</div>
            <div className="message-block-not-my">nie moja wiadomosc</div>
            <div className="message-block-my">moja wiadomosc</div>
            <div className="message-block-not-my">nie moja wiadomosc</div>
            <div className="message-block-my">moja wiadomosc</div>
            <div className="message-block-not-my">nie moja wiadomosc</div>
          </div>
        </div>
        <div className="send-message">
          <input placeholder="..."></input>
          <button type="submit" className="send">
            🍻
          </button>
        </div>
      </div>
    </div>
  );
};
export default Chat;
