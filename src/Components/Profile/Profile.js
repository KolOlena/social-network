import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";


const Profile = ({profileState: {posts, newPostText}, dispatch}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsConteiner postsData={posts} newPostText={newPostText} dispatch={dispatch}/>
    </div>
  );
}

export default Profile
