import React from "react";

import {sendMessegeActionCreator, updateNewMessegeActionCreator} from "../../../redux/dialogs-reducer";


const MessegeArea = ({dispatch, newMessegeBody}) => {

  let newMessege = React.createRef();

  let sendMessegeButton = () => {
      dispatch(sendMessegeActionCreator());
  };

  let onMessegeChange = () => {
    let messege = newMessege.current.value;
    dispatch(updateNewMessegeActionCreator(messege));
  };

  return (
    <div >
        <div>
          <textarea onChange={onMessegeChange}  ref={newMessege} value={newMessegeBody} placeholder={'Enter your messege'}></textarea>
        </div>
        <div>
          <button onClick={sendMessegeButton}>Send</button>
        </div>
    </div>
  );
}

export default MessegeArea;
