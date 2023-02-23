import React, { useState, useEffect } from "react";
import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import axios from "axios";
import { usersRoute } from "../../api/api";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [User, setUser] = useState({});

  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${usersRoute}/${username}`);

      setUser(res.data);
    };
    fetchUser();
  }, [username]);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileright">
          <div className="profilerighttop">
            <div className="profilecover">
              <img
                src={User.coverPicture || "/assets/bitch2.jpg"}
                alt=""
                className="profilecoverimg"
              />
              <img
                src={User.profilePicture || "/assets/bitch3.jpg"}
                alt=""
                className="profileuserimg"
              />
            </div>
            <div className="profileinfor">
              <h4 className="profileinforname">{User.username} </h4>
              <span className="profiledescp">
                {User.desc || "weka descriptioni mwenzangu"}
              </span>
            </div>
          </div>
          <div className="profilerightbottom">
            <Feed username={username} />

            <Rightbar User={User} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
