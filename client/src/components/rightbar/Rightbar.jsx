import React from "react";
import "./rightbar.css";
import { User } from "../../dummyData";
import Online from "../online/Online";

const Rightbar = ({ Profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdaycontainer">
          <img src="/assets/birthday.jpg" alt="" className="birthdayimg" />
          <span className="birthdaytext">
            <b>pola foster</b> and <b>3 other friends </b>have birthday today
          </span>
        </div>
        <img className="rightbarAd" src="/assets/bitch4.jpg" alt="" />
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="rightbarfriendlist">
          {User.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbartitle">user information</h4>
        <div className="rightbarinfor">
          <div className="rightbarinforitems">
            <span className="rightbarinfokey">City</span>
            <span className="rightbarinfovalue">Newyork</span>
          </div>
          <div className="rightbarinforitems">
            <span className="rightbarinfokey">From </span>
            <span className="rightbarinfovalue">Madrid</span>
          </div>
          <div className="rightbarinforitems">
            <span className="rightbarinfokey">Relationship</span>
            <span className="rightbarinfovalue">single</span>
          </div>
        </div>


        <h4 className="rightbartitle">user Friends</h4>

        <div className="rightbarfollowings">
          <div className="rightfollowing">
            <img
              src="/assets/bitchone.jpg"
              alt=""
              className="rightbarfollowimg"
            />
            <span className="rightfollowingname">linux parrot</span>
          </div>

          <div className="rightfollowing">
            <img
              src="/assets/bitch2.jpg"
              alt=""
              className="rightbarfollowimg"
            />
            <span className="rightfollowingname">ripper wick</span>
          </div>
          <div className="rightfollowing">
            <img
              src="/assets/bitch4.jpg"
              alt=""
              className="rightbarfollowimg"
            />
            <span className="rightfollowingname">John Carter</span>
          </div>
          <div className="rightfollowing">
            <img
              src="/assets/bitch3.jpg"
              alt=""
              className="rightbarfollowimg"
            />
            <span className="rightfollowingname">instanbul bul</span>
          </div>
          <div className="rightfollowing">
            <img
              src="/assets/bitch4.jpg"
              alt=""
              className="rightbarfollowimg"
            />
            <span className="rightfollowingname">itru waye</span>
          </div>
          <div className="rightfollowing">
            <img
              src="/assets/bitchone.jpg"
              alt=""
              className="rightbarfollowimg"
            />
            <span className="rightfollowingname">mzee wass</span>
          </div>
          <div className="rightfollowing">
            <img
              src="/assets/bitch2.jpg"
              alt=""
              className="rightbarfollowimg"
            />
            <span className="rightfollowingname">were Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
      {Profile ? <ProfileRightBar/> :<HomeRightBar/> }
      </div>
    </div>
  );
};

export default Rightbar;
