import React from "react";
import classes from '../Dialogs.module.css';

const MessegeArea = () => {

  let newMessege = React.createRef();

  let sendMessege = () => {
    let messege = newMessege.current.value;
    alert(messege);
  };

  return (
    <div >
        <div>
          <textarea ref={newMessege}></textarea>
        </div>
        <div>
          <button onClick={sendMessege}>Send</button>
        </div>
    </div>
  );
}

export default MessegeArea;
