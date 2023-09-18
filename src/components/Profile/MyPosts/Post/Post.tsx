import React from "react";
import classes from "./Post.module.css";

type PostPropsType = {
  message: string;
  likesCount: number;
};
const Post = (props: PostPropsType) => {
  return (
    <div className={classes.item}>
      <div>
        <img
          src={
            "https://avatars.mds.yandex.net/i?id=a4e67ec8966163d185ea5a5b908a9fc8_l-5236752-images-thumbs&n=13"
          }
        />
      </div>
      <div>
          <span className={classes.postText}>
          {props.message}
          </span>
        
        <div>
          <span className={classes.like}>like {'\u2665'} {props.likesCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
