import React from "react";
import classes from './../Navbar.module.css'


const Friends = ({friendsArray}) => {

  return (
    <div className={classes.bestFriends}>
        {friendsArray}
    </div>
  )
}

export default Friends;
