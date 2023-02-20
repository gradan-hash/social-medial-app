import React from "react";
import "./friends.css";
const Closefriends = ({user}) => {
  return (
    <li className="sidebarfriend">
      <img src={user.profilepicture} alt="" className="sidearfriendimg" />
      <span className="friendname">{user.username}</span>
    </li>
  );
};

export default Closefriends;
