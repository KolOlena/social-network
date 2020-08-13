import React from "react";
import classes from './Post.module.css';
const Post = ({post, likes}) => {
  return (
    <div className={classes.item}>
      <img src='https://cdn.shopify.com/shopifycloud/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png'/>
      { post }
        <div>
          <span>like </span> {likes}
        </div>
    </div>
  );
}

export default Post
