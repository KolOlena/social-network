import React from "react";
import classes from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = ({dialogData: {id, name, image}}) => {
  let path = 'dialogs/' + id;
  return (
    <div className={classes.dialog}>
      <div>
        <img src={image}/>
      </div>
      <div className={classes.dialogItem}>
        <NavLink to={path}>{name}</NavLink>
      </div>
    </div>
  )
}

export default DialogItem;
