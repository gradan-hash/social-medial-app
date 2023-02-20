import React from "react";
import "./online.css";
const Online = ({user}) => {
  return (
    <li className="rightbarfriend">
      <div className="rightbarprofilecont">
        <img className="rightbarprofileimg" src={user.profilepicture} alt="" />
        <span className="rightbaronline"></span>
      </div>
      <span className="rightbarusername">{user.username}</span>
    </li>
  );
};

export default Online;
