import Image from "next/image";
import React, { useState , useRef, useEffect } from "react";
import ChatbotIcon from "@/public/img/icons8-message-bot-30.png";
import ChatSend from "@/public/img/paper-plane-solid.svg"
import { FaRobot } from "react-icons/fa6";

const Chatbot: React.FC = () => {
  const [isChatboxVisible, setChatboxVisibility] = useState(false);

  const toggleChatbox = () => {
    setChatboxVisibility(!isChatboxVisible);
  };

  return (
      <div className="chat-container relative">
      {isChatboxVisible && (
        <section className="chat-section">
          <div className="chatbox">
          <input type="text" placeholder="Enter Your Message" />
          <button className="chat-send-button"><Image src={ChatSend} alt="" width={20} /></button>
        </div>
        </section>
      )}
      <button className="chat-button" onClick={toggleChatbox}>
        <FaRobot />
      </button>
    </div>

  );
};

export default Chatbot;