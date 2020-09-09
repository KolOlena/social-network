import React from "react";
import { sendMessegeActionCreator, updateNewMessegeActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsState: state.messegesPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessegeBody: (messege) => {
      dispatch(updateNewMessegeActionCreator(messege));
    },
    sendMessege: () => {
      dispatch(sendMessegeActionCreator());
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
