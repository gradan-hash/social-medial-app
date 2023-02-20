import React from "react";
import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Topbar = () => {
  return (
    <div className="topbarcontainer">
      <div className="topbarleft">
        <span className="logo">Corneliusocial</span>
      </div>

      <div className="topbarcenter">
        <div className="searchbar">
          <SearchIcon className="searchicon"/>
          <input
            placeholder="search for friends, videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarright">
        <div className="topbarlinks">
          <span className="topbarlinks">Homepage</span>
          <span className="topbarlinks">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbariconitem">
            <PersonIcon />
            <span className="topbariconbadge">1</span>
          </div>
          <div className="topbariconitem">
            <ChatIcon />
            <span className="topbariconbadge">1</span>
          </div>
          <div className="topbariconitem">
            <NotificationsIcon />
            <span className="topbariconbadge">1</span>
          </div>
        </div>
        <img src="/assets/cor2.jpeg" alt="" className="topbarimg" />
      </div>
    </div>
  );
};

export default Topbar;
