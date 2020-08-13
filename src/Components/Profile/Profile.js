import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({profileState: {posts, newPostText}, addPost, updateNewPostText}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={posts} newPostText={newPostText} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </div>
  );
}

export default Profile
