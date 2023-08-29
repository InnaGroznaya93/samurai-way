import React from 'react';
import classes from "./Post.module.css";

type PostPropsType = {
    message: string
    likesCount: number
}
const Post = (props: PostPropsType) => {
    return (
            <div className={classes.item}>
                <img
                    src={'https://avatars.mds.yandex.net/i?id=a4e67ec8966163d185ea5a5b908a9fc8_l-5236752-images-thumbs&n=13'}/>
                {props.message}
                <div>
                    <span>like {props.likesCount}</span>
                </div>
            </div>
    );
};

export default Post;