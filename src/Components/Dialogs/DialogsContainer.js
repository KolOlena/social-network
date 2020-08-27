import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messege from "./Messege/Messege";
import {sendMessegeActionCreator, updateNewMessegeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = ({dialogsState, dispatch}) => {


    let sendMessegeButton = () => {
        dispatch(sendMessegeActionCreator());
    };

    let onMessegeChange = (messege) => {
        dispatch(updateNewMessegeActionCreator(messege));
    };


    return (
    <Dialogs updateNewMessegeBody={onMessegeChange} sendMessege={sendMessegeButton} dialogsState={dialogsState}/>
  )
}

export default DialogsContainer;
