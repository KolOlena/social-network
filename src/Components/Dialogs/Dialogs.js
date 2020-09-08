import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messege from "./Messege/Messege";


const Dialogs = (props) => {
  debugger;
  let state = props.dialogsState;

  const dialogsArray = state.dialogs
    .map(el => <DialogItem dialogData={el}/>);

  const messegeArray = state.messege
    .map(el => <Messege messegeData={el}/>);
  let newMessegeBody = state.newMessegeBody;

    let newMessege = React.createRef();

    let sendMessegeButton = () => {
        props.sendMessege();
    };

    let onMessegeChange = () => {
        let messege = newMessege.current.value;
        props.updateNewMessegeBody(messege);
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
