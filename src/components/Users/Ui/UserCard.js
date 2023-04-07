// creat react component

// *! some style and need to add statics

import React from 'react';
import classes from './UserCard.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faTrash,
//   faEye,
//   faBarsProgress,
// } from '@fortawesome/free-solid-svg-icons';
import {
  NavLink
} from 'react-router-dom';
const UserCard = props => {
  return (
    <div className={classes.card}>
      <div className={classes.title}>
        <h1>
          Welome back <span>{props.userData.first_name}</span>
        </h1>
      </div>
      {/* <div className={classes.statics}>
        <div className={classes.item}>
          <div className={classes.icone}>
            
            <h2>Tasks assigned</h2>
          </div>
          <h1>15</h1>
        </div>
        <div className={classes.item}>
          <div className={classes.icone}>
            
            <h2>Tasks assigned</h2>
          </div>
          <h1>15</h1>
        </div>
      </div> */}
      <div className={classes.foter}>
        <div className={classes.edit}>
        <NavLink to='/userInformation' >Edit user information</NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
