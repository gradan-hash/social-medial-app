import React, { useEffect, useState } from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { usersRoute } from "../../api/api";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [User, setUser] = useState({});

  const likehandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(isLiked);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${usersRoute}/${post.userId}`);

      setUser(res.data);
      console.log(res.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <div className="post">
      <div className="postwarraper">
        <div className="posttop">
          <div className="posttopleft">
            <Link to={`profile/${User.username}`}>
              <img
                src={User.profilepicture || "/persons/avatar.png"}
                alt=""
                className="postprofileimg"
              />
            </Link>
            <span className="postusername">{User.username}</span>
            <span className="postdate">{format(post.createdAt)}</span>
          </div>

          <div className="posttopright">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postcenter">
          <span className="posttext">{post?.desc}</span>

          <img src={post.img} alt="" className="postimg" />
        </div>
        <div className="postbottom">
          <div className="postbottomleft">
            <img
              src="/assets/likes.jpg"
              alt=""
              className="likeicon"
              onClick={likehandler}
            />
            <img
              src="/assets/heart.jpg"
              alt=""
              className="likeicon"
              onClick={likehandler}
            />
            <span className="postlikecounter">{like} people liked</span>
          </div>
          <div className="postbottomright">
            <span className="comments">{post.comment}comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
