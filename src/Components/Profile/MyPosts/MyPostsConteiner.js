import React from "react";
import {addPostactionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsConteiner = ({postsData, dispatch,  newPostText}) => {


  let addPostButton = () => {
    dispatch(addPostactionCreator());
  };

  let onPostChange = (text) => {
    dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <MyPosts updateNewPostText={onPostChange} addPostButton={addPostButton}  postsData={postsData} newPostText={newPostText}/>
  );
}

export default MyPostsConteiner
