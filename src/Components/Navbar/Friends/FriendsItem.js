import React from "react";
import classes from './../Navbar.module.css';


const FriendsItem = ({messegeData: {name, image}}) => {
  return (
    <div>
      <div>
        <img src={image}/>
      </div>
      <div className={classes.friensName}>
        {name}
      </div>
    </div>
  )
}

export default FriendsItem;
