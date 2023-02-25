import axios from "axios";
import React, { useEffect, useState } from "react";

import { conversationRoute, friendRoute } from "../../api/api";
import "./chatonline.css";

export const Chatonline = ({ onlineusers, setCurrentchat, currentId }) => {
  const [friends, setFriends] = useState([]);
  const [onlinefriends, setonlineFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await axios.get(`${friendRoute}/${currentId}`);
        setFriends(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [currentId]);

  useEffect(() => {
    setonlineFriends(friends.filter((fri) => onlineusers.includes(fri._id)));
  }, [friends, onlineusers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `${conversationRoute}/find/${currentId}/${user._id}`
      );
      setCurrentchat(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="chatonline">
      {onlinefriends.map((onl) => (
        <div
          className="chatonlinefriend"
          key={onl._id}
          onClick={() => handleClick(onl)}>
          <div className="chatonlinecontainer">
            <img
              src={onl?.profilePicture || "/assets/bitch3.jpg"}
              alt=""
              className="chatonlineimg"
            />
            <div className="chatonlinebadge"></div>
          </div>
          <span className="chatonlinename">{onl?.username || "none"}</span>
        </div>
      ))}
    </div>
  );
};
