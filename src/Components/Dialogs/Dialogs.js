import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messege from "./Messege/Messege";
import MessegeArea from "./MessegeArea/MessegeArea";



const Dialogs = ({dialogsState: {dialogs, messege}}) => {

  const dialogsArray = dialogs
    .map(el => <DialogItem dialogData={el}/>);

  const messegeArray = messege
    .map(el => <Messege messegeData={el}/>);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItem}>
        {dialogsArray}
      </div>
      <div className={classes.test}>
        {messegeArray}
        <div>
          <MessegeArea />
        </div>
      </div>

    </div>
  )
}

export default Dialogs;
