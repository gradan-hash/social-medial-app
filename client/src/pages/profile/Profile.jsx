import React from "react";
import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileright">
          <div className="profilerighttop">
            <div className="profilecover">
              <img src="/assets/bitch2.jpg" alt="" className="profilecoverimg" />
              <img src="/assets/bitch4.jpg" alt="" className="profileuserimg" />
            </div>
            <div className="profileinfor">
              <h4 className="profileinforname">cornelius nyaa</h4>
              <span className="profiledescp">hello my friends</span>
            </div>
          </div>
          <div className="profilerightbottom">
            <Feed />
            <Rightbar Profile/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
