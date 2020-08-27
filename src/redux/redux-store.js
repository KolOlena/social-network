import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let redusers = combineReducers({
  profilePage: profileReducer,
  messegesPage: dialogsReducer
});

let store = createStore(redusers);

export default store;