import React from "react";
import { sendMessegeActionCreator, updateNewMessegeActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {
  return <StoreContext.Consumer>
    { store => {
      let state = store.getState();
      let sendMessegeButton = () => {
        store.dispatch(sendMessegeActionCreator());
      };

      let onMessegeChange = (messege) => {
        store.dispatch(updateNewMessegeActionCreator(messege));
      };

      return <Dialogs updateNewMessegeBody={onMessegeChange}
                      sendMessege={sendMessegeButton}
                      dialogsState={state.messegesPage}/>
    }
    }
  </StoreContext.Consumer>
}

export default DialogsContainer;
