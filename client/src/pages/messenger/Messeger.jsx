import React from "react";
import "./messager.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversation/Conversation";
import { Message } from "../../components/message/Message";
import { Chatonline } from "../../components/chatonline/Chatonline";
const Messeger = () => {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatmenu">
          <div className="chatmenuwrapper">
            <input
              placeholder="Search for friends"
              className="checkmenuinput"
            />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>

        <div className="chatspace">
          <div className="chatspacewrapper">
            <div className="chatboxtop">
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message own={true} />
            </div>
            <div className="chatboxbottom">
              <textarea
                placeholder="write something"
                className="chatmessageip"></textarea>
              <button className="chatsubmit">send</button>
            </div>
          </div>
        </div>
        <div className="chatonline">
          <div className="onlinewrapper">
            <Chatonline/>
            <Chatonline/>
            <Chatonline/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messeger;
