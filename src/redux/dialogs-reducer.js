const UPDATE_NEW_MESSEGE_BODY = 'UPDATE-NEW-MESSEGE-BODY';
const ADD_NEW_MESSEGE_BODY = 'ADD-NEW-MESSEGE-BODY';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSEGE_BODY:
      state.newMessegeBody = action.newBody;
      return state;
    case ADD_NEW_MESSEGE_BODY:
      let newMessege = {
        id: 3,
        messege: state.newMessegeBody,
      };
      state.messege.push(newMessege);
      state.newMessegeBody = '';
      return state
    default:
      return state;
  }
}

export const sendMessegeActionCreator = () => ({
  type: ADD_NEW_MESSEGE_BODY,
})

export const updateNewMessegeActionCreator = (text) => ({
  type: UPDATE_NEW_MESSEGE_BODY,
  newBody: text
})

export default dialogsReducer;