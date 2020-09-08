import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { Route } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


const App = (props) => {

  return (
      <div className='app-wraper'>
        <Header/>
        <Navbar />
        <div className='app-wraper-content '>
          <Route exact path='/dialogs' render = {() => <DialogsContainer /> } />
          <Route exact path='/profile' render = {() => <Profile />} />
          <Route exact path='/news' render = {() => <News />} />
          <Route exact path='/music' render = {() => <Music />} />
          <Route exact path='/settings' render = {() => <Settings />} />
        </div>
      </div>
  );
};

export default App;
