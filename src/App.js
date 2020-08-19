import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";


const App = ({state: {messegesPage, profilePage}, addPost, updateNewPostText}) => {

  return (
    <BrowserRouter>
      <div className='app-wraper'>
        <Header/>
        <Navbar dialogsState={messegesPage}/>
        <div className='app-wraper-content '>
          <Route exact path='/dialogs' render = {() => <Dialogs dialogsState={messegesPage} /> } />
          <Route exact path='/profile' render = {() => <Profile profileState={profilePage} addPost={addPost} updateNewPostText={updateNewPostText}/>} />
          <Route exact path='/news' render = {() => <News />} />
          <Route exact path='/music' render = {() => <Music />} />
          <Route exact path='/settings' render = {() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;