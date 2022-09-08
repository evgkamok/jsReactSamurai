import React from "react";
import style from "./Posts.module.scss";

const Posts = (props) => {
  const postList = props.postsList.map(({ id, postText }) => (
    <div key={id} className={style.post}>
      {postText}
    </div>
  ));

  return (
    <div className={style.wrapper}>
      <div className={style.addPost}>
        <textarea
          cols={25}
          rows={5}
          placeholder="Type here your new post !"
          value={props.newPostText}
          onChange={props.updatePostText}
        />
        <button className={style.sendButton} onClick={props.addPost}>
          Add Post
        </button>
      </div>
      <div className={style.showPosts}>{postList}</div>
    </div>
  );
};

export default Posts;
