import React, { useState } from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { User } from "../../dummyData";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const  likehandler =()=>{
    setLike(isLiked ? like -1 :like+1);
    setIsLiked(isLiked)
  } 

  return (
    <div className="post">
      <div className="postwarraper">
        <div className="posttop">
          <div className="posttopleft">
            <img
              src={User.filter((u) => u.id === post?.userId)[0].profilepicture}
              alt=""
              className="postprofileimg"
            />
            <span className="postusername">
              {User.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postdate">{post.date}</span>
          </div>

          <div className="posttopright">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postcenter">
          <span className="posttext">{post?.desc}</span>
          <img src={post.photo} alt="" className="postimg" />
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
