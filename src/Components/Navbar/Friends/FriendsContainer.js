import React from "react";
import FriendsItem from "./FriendsItem";
import Friends from "./Friends";
import StoreContext from "../../../StoreContext";


const FriendsContainer = () => {
  return <StoreContext.Consumer>
    { store => {
      let state = store.getState();
      const friendsArray = state.messegesPage.dialogs
        .filter((item, i) => i < 3)
        .map(el => <FriendsItem messegeData={el}/>)

      return <Friends friendsArray={friendsArray}/>
    }
    }
  </StoreContext.Consumer>
}

export default FriendsContainer;
