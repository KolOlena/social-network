import React from "react";
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://stationremodel.files.wordpress.com/2019/10/logo.gif'/>
      </div>
      <div className={classes.descriptionBlock}>
        ava+desc
      </div>
    </div>
  );
}

export default ProfileInfo
