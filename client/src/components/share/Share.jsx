import React from "react";
import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const Share = () => {
  return (
    <div className="share">
      <div className="sharewarraper">
        <div className="sharetop">
          <img src="/assets/bitch2.jpg" alt="" className="shareprofileimg" />
          <input placeholder="whats in your mind" className="shareinput" />
        </div>
        <hr className="sharehr"></hr>
        <div className="sharebottom">
          <div className="shareoptions">
            <div className="shareoption">
              <PermMediaIcon htmlColor="tomato" className="shareicon" />
              <span className="shareoptiontext">Photo/Video</span>
            </div>

            <div className="shareoption">
              <LabelIcon htmlColor="blue" className="shareicon" />
              <span className="shareoptiontext">Tag</span>
            </div>

            <div className="shareoption">
              <RoomIcon htmlColor="green" className="shareicon" />
              <span className="shareoptiontext">location</span>
            </div>
            <div className="shareoption">
              <EmojiEmotionsIcon htmlColor="goldenrod"className="shareicon" />
              <span className="shareoptiontext">Feelings</span>
            </div>
          </div>
          <button className="sharebutton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
