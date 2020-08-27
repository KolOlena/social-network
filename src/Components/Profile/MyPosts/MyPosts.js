import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";




const MyPosts = ({postsData, newPostText, updateNewPostText, addPostButton}) => {

  const postsArray = postsData.
  map(({post, likes}) =>
    <Post post={post} likes={likes}/>
  );

  let newPostElement = React.createRef();

  let onAddPost = () => {
    addPostButton();
  };

  let onPostChange = () => {
    debugger;
    let text = newPostElement.current.value;
    updateNewPostText(text);
  }

  return (
    <div className={classes.postsWrapper}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsArray}
      </div>
    </div>
  );
}

export default MyPosts
