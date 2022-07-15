import React from "react";
import "./chat.css";
const ChatPage = () => {
  return (
    <div className="body">
      <div className="left-bar">
        <div className="user-list">
          <img
            src="http://ocen-piwo.pl/upload/192ff0523b0ef20d9c28b716c29a1a52.webp"
            alt="romper"
            className="prof-pic"
          />
          <div className="user">username</div>
        </div>
        <div className="user-list">
          <img
            src="http://ocen-piwo.pl/upload/192ff0523b0ef20d9c28b716c29a1a52.webp"
            alt="romper"
            className="prof-pic"
          />
          <div className="user">username</div>
        </div>
        <div className="user-list">
          <img
            src="http://ocen-piwo.pl/upload/192ff0523b0ef20d9c28b716c29a1a52.webp"
            alt="romper"
            className="prof-pic"
          />
          <div className="user">username</div>
        </div>
        <div className="user-list">
          <img
            src="http://ocen-piwo.pl/upload/192ff0523b0ef20d9c28b716c29a1a52.webp"
            alt="romper"
            className="prof-pic"
          />
          <div className="user">username</div>
        </div>
      </div>

      <div className="right-bar">
        <nav id="navbar">
          <div className="navbarM">
            <a href="http://localhost:3000/About">About</a>
            <a href="http://localhost:3000/Chat">Channels</a>
          </div>
          <div className="navbarT">nazwa kanalu</div>
          <div className="navSpacer"></div>
          <div className="navbarL">
            <a id="logout" href="http://localhost:3000/Login">
              Logout
            </a>
          </div>
        </nav>
        <div className="chat-window">
          <div className="messages">
            <div className="message-block message-block-my ">
              moja wiadomosc
            </div>

            <div className="message-block message-block-not-my">
              nie moja wiadomosc
            </div>
            <div className="message-block message-block-my ">
              moja wiadomosc
            </div>

            <div className="message-block message-block-not-my">
              nie moja wiadomosc
            </div>
            <div className="message-block message-block-my ">
              moja wiadomosc
            </div>

            <div className="message-block message-block-not-my">
              nie moja wiadomosc
            </div>
            <div className="message-block message-block-my ">
              moja wiadomosc
            </div>

            <div className="message-block message-block-not-my">
              nie moja wiadomosc
            </div>
            <div className="message-block message-block-my ">
              moja wiadomosc
            </div>

            <div className="message-block message-block-not-my">
              nie moja wiadomosc
            </div>
            <div className="message-block message-block-my ">
              moja wiadomosc
            </div>

            <div className="message-block message-block-not-my">
              nie moja wiadomosc
            </div>
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
export default ChatPage;
