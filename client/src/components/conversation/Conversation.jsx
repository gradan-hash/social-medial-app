import axios from "axios";
import React, { useEffect, useState } from "react";
import { usersRoute } from "../../api/api";
import "./conco.css";
const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios.get(`${usersRoute}/${friendId}`);
      
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        src={user?.profilePicture || "/persons/avatar.png"} alt=""
        className="convoimg"
      />
      <span className="conversationtext">{user?.username}</span>
    </div>
  );
};

export default Conversation;
