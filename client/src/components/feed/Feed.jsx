import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { postRoute } from "../../api/api";

const Feed = ({ username }) => {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = username
        ? await axios.get("http://localhost:8800/api/posts/profile/" + username)
        
        : await axios.get(`${postRoute}/timeline/63f4c9cd176acc155a7f0530`);
      console.log(res.data);
      setPosts(res.data);
    };
    fetchPost();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedwarapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
