import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({profileState: {posts, newPostText}, dispatch}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={posts} newPostText={newPostText} dispatch={dispatch}/>
    </div>
  );
}

export default Profile
