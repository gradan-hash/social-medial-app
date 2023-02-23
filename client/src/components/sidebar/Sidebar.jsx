import React from "react";
import "./sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import { Userss } from "../../dummyData";
import Closefriends from "../friends/Closefriends";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <ul className="Sidebarlist">
          <li className="sidebarlistitems">
            <RssFeedIcon className="sidebaricon" />
            <span className="sidebarlistitem">Feed</span>
          </li>

          <li className="sidebarlistitems">
            <ChatIcon className="sidebaricon" />
            <span className="sidebarlistitem">Chats</span>
          </li>

          <li className="sidebarlistitems">
            <SmartDisplayIcon className="sidebaricon" />
            <span className="sidebarlistitem">Videos</span>
          </li>

          <li className="sidebarlistitems">
            <GroupsIcon className="sidebaricon" />
            <span className="sidebarlistitem">Groups</span>
          </li>

          <li className="sidebarlistitems">
            <BookmarksIcon className="sidebaricon" />
            <span className="sidebarlistitem">Bookmarks</span>
          </li>

          <li className="sidebarlistitems">
            <QuestionAnswerIcon className="sidebaricon" />
            <span className="sidebarlistitem">Questions</span>
          </li>

          <li className="sidebarlistitems">
            <WorkIcon className="sidebaricon" />
            <span className="sidebarlistitem">Jobs</span>
          </li>

          <li className="sidebarlistitems">
            <EventIcon className="sidebaricon" />
            <span className="sidebarlistitem">Events</span>
          </li>

          <li className="sidebarlistitems">
            <CastForEducationIcon className="sidebaricon" />
            <span className="sidebarlistitem">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarhr"></hr>
        <ul className="sidebarfriendlist">
          {Userss.map((u) => (
            <Closefriends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
