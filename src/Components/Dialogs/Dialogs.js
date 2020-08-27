import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messege from "./Messege/Messege";
import {sendMessegeActionCreator, updateNewMessegeActionCreator} from "../../redux/dialogs-reducer";



const Dialogs = ({dialogsState: {dialogs, messege, newMessegeBody}, updateNewMessegeBody, sendMessege}) => {

  const dialogsArray = dialogs
    .map(el => <DialogItem dialogData={el}/>);

  const messegeArray = messege
    .map(el => <Messege messegeData={el}/>);

    let newMessege = React.createRef();

    let sendMessegeButton = () => {
        sendMessege();
    };

    let onMessegeChange = () => {
        let messege = newMessege.current.value;
        updateNewMessegeBody(messege);
    };


    return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItem}>
        {dialogsArray}
      </div>

      <div className={classes.test}>
        {messegeArray}
        <div>
                <div>
                    <textarea onChange={onMessegeChange}  ref={newMessege} value={newMessegeBody} placeholder={'Enter your messege'}></textarea>
                </div>
                <div>
                    <button onClick={sendMessegeButton}>Send</button>
                </div>
        </div>

      </div>

    </div>
  )
}

export default Dialogs;
