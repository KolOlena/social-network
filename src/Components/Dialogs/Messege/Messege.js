import React from "react";
import classes from './../Dialogs.module.css'

const Messege = ({messegeData: {messege}}) => {
  return (
      <div className={classes.massages}>
        {messege}
      </div>
  )
}

export default Messege;
