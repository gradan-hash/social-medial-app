import React, { useContext } from "react";
import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Topbar = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <div className="topbarcontainer">
      <div className="topbarleft">
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <span className="logo">Corneliusocial</span>
        </Link>
      </div>

      <div className="topbarcenter">
        <div className="searchbar">
          <SearchIcon className="searchicon" />
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
          <Link to="/messenger" style={{ TextDecoration: "none" }}>
            <div className="topbariconitem">
              <ChatIcon />
              <span className="topbariconbadge">1</span>
            </div>
          </Link>

          <div className="topbariconitem">
            <NotificationsIcon />
            <span className="topbariconbadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username} `}>
          <img
            src={user.profilePicture || "/persons/avatar.png"}
            alt=""
            className="topbarimg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
