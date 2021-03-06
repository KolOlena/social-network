import React from "react";
import { addPostactionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  debugger
  return {
    postsData: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPostButton: () => {
      dispatch(addPostactionCreator());
    }
  }
}

const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsConteiner
