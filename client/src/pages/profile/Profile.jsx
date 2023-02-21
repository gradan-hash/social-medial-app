import React ,{useState,useEffect} from "react";
import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import axios from "axios"
import { usersRoute } from "../../api/api";

const Profile = () => {
  const [User, setUser] = useState({}); 
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${usersRoute}?username=cornelis`);

      setUser(res.data);
    };
    fetchUser();
  }, []);
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
              <h4 className="profileinforname">{User.username} </h4>
              <span className="profiledescp">{User.desc}</span>
            </div>
          </div>
          <div className="profilerightbottom">
            <Feed username="followed2"/>
            <Rightbar Profile/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
