import React, { useState } from 'react';
import classes from './users.module.css';
import LogoUser from '../../Ui/LogoUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons';



const UserRow = props => {


  //creat state to show password
const [showPassword, setShowPassword] = useState(false);
// creat function to show each password


// creat a function to change each password to *
const changePassword = password => {
  let newPass = '';
  for (let i = 0; i < password.length; i++) {
    newPass += '*';
  }
  return newPass;
};

const showPasswordFunc = ( ) => {
  props.showPasswordFunc(showPassword,setShowPassword)
};
  return (
    <div id={props.user.id} className={`${classes.row} ${classes.con}`}>
      <div className={`${classes.item} ${classes.name}`}>
        <LogoUser curentRole={props.user.role}></LogoUser>
        <h2>{props.user.name}</h2>
      </div>
      <div className={classes.item}>
        <h2>{props.user.email}</h2>
      </div>
      <div className={classes.item}>
        <h2>
          {showPassword
            ? props.user.password
            : changePassword(props.user.password)}
        </h2>
        <button onClick={showPasswordFunc}>
          <FontAwesomeIcon
            icon={faEye}
            className={`${classes.icon} ${classes.eye}`}
            id={props.user.id}
          />
        </button>
      </div>
      <div className={`${classes.item} ${classes.role}`}>
        <h2>{props.user.role}</h2>
      </div>
      <div className={`${classes.item} ${classes.degree}`}>
        <h2>{props.user.degree}</h2>
      </div>
      <div
        id={props.user.id}
        onClick={props.deleteUser}
        className={`${classes.item} ${classes.trash}`}
      >
        <FontAwesomeIcon
          icon={faTrash}
          className={classes.icon}
          id={props.user.id}
        />
      </div>
    </div>
  );
};

export default UserRow;
