import React from "react";
import { addPostactionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsConteiner = () => {

  return <StoreContext.Consumer>
      { store => {
        let state = store.getState();
        let addPostButton = () => {
          store.dispatch(addPostactionCreator());
        };

        let onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        }
        return <MyPosts updateNewPostText={onPostChange}
                 addPostButton={addPostButton}
                 postsData={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
      }
      }
  </StoreContext.Consumer>
}

export default MyPostsConteiner
