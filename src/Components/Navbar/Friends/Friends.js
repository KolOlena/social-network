import React from "react";
import classes from './../Navbar.module.css'
import FriendsItem from "./FriendsItem";


const Friends = ({friendsData: {dialogs}}) => {

  const friendsArray = dialogs
    .filter((item, i) => i < 3)
    .map(el => <FriendsItem messegeData={el}/>)

  return (
    <div className={classes.bestFriends}>
        {friendsArray}
    </div>
  )
}

export default Friends;
