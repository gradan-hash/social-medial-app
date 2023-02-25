import React, { useContext, useEffect, useRef, useState } from "react";
import "./messager.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";

import { Chatonline } from "../../components/chatonline/Chatonline";
import { AuthContext } from "../../context/AuthContext";
import { conversationRoute, messageRoute } from "../../api/api";
import axios from "axios";
import { io } from "socket.io-client";

const Messeger = () => {
  const { user } = useContext(AuthContext);
  // console.log(user)
  const [conversation, setConversation] = useState([]);
  const [currentchat, setCurrentchat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newmessage, setNewMessage] = useState("");
  const [arrivalmesssage, setarrivalmesssage] = useState(null);
  const [onlineusers, setOnlineusers] = useState([]);

  const scrollRef = useRef();
  // const [socket, setSocket] = useState();
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");

    socket.current.on("getMessage", (data) => {
      setarrivalmesssage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalmesssage &&
      currentchat?.members.includes(arrivalmesssage.sender) &&
      setMessages((prev) => [...prev, arrivalmesssage]);
  }, [arrivalmesssage, currentchat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineusers(
        user.following.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);


  

  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get(`${conversationRoute}/${user._id}`);
        // console.log(res);
        setConversation(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversation();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`${messageRoute}/${currentchat?._id}`);
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (currentchat) {
      getMessages();
    }
  }, [currentchat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      senderId: user._id,
      text: newmessage,
      conversationId: currentchat._id,
    };
    const receiverId = currentchat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newmessage,
    });

    try {
      const res = await axios.post(messageRoute, message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
            {conversation.map((c) => (
              <div onClick={() => setCurrentchat(c)}>
                {" "}
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>

        <div className="chatspace">
          <div className="chatspacewrapper">
            {currentchat ? (
              <>
                <div className="chatboxtop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      {" "}
                      <Message
                        message={m}
                        key={m._id}
                        own={m.sender === user._id}
                      />
                    </div>
                  ))}
                </div>
                <div className="chatboxbottom">
                  <textarea
                    placeholder="write something"
                    className="chatmessageip"
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newmessage}></textarea>
                  <button onClick={handleSubmit} className="chatsubmit">
                    send
                  </button>
                </div>
              </>
            ) : (
              <span className="noconversation">
                Open Conversation to start chat.
              </span>
            )}
          </div>
        </div>
        <div className="chatonline">
          <div className="onlinewrapper">
            <Chatonline
              onlineusers={onlineusers}
              currentId={user._id}
              setCurrentchat={setCurrentchat}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messeger;
