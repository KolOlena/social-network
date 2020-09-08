import React from "react";
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";
//classes можно наххвать как угодно
//это объект в котором храняться все стили(ключ) с
//файла со стилями с их уникальными значениями(значение)

const Navbar = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/dialogs' activeClassName={classes.active}>Massadges</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
      </div>

      <div className={classes.friends}>
        <div className={classes.friendsHeader}>Friends</div>
        <div className={classes.bestFriends}>
          <FriendsContainer />
        </div>
      </div>
    </nav>
  );
}
export default Navbar

