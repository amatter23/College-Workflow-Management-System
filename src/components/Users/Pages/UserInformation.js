import React, { useState } from 'react';
import classes from './UserInformation.module.css';
import UserLogo from '../Ui/UserLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import { updateUserData } from '../Events/getMainData';

import 'react-toastify/dist/ReactToastify.css';
const UserInformation = props => {
  // open and close edit form
  const [disabled, setDisabled] = useState(true);
  // get user data from props
  const [user, setUser] = useState(props.userData);
  // update user data
  const updateUser = async event => {
    event.preventDefault();
    try {
      const response = await updateUserData(
        event.target[0].value,
        event.target[1].value,
        event.target[2].value
      );
      toast.success('User Updated', {
        position: toast.POSITION.TOP_LEFT,
      });
    } catch (error) {
      toast.error('failed!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
  return (
    <div className={classes.contaner}>
      <ToastContainer />
      <div className={classes.userTitle}>
        <div className={classes.nameTitle}>
          <FontAwesomeIcon className={classes.icon} icon={faUser} />
          <h1>{user.full_name}</h1>
        </div>
      </div>
      <div className={classes.userData}>
        <form onSubmit={updateUser}>
          <div className={`${classes.name} ${classes.item}`}>
            <div className={classes.nameDiv}>
              <label htmlFor='name'>First Name</label>
              <input
                disabled={disabled}
                type='text'
                name='name'
                id='name'
                defaultValue={user.first_name}
                autoFocus
              />
            </div>
            <div className={classes.nameDiv}>
              <label htmlFor='name'>last Name</label>
              <input
                disabled={disabled}
                type='text'
                name='name'
                id='name'
                defaultValue={user.last_name}
              />
            </div>
          </div>
          <div className={`${classes.email} ${classes.item}`}>
            <label htmlFor='email'>Email</label>
            <input
              disabled={disabled}
              type='email'
              name='email'
              id='email'
              defaultValue={user.email}
            />
          </div>
          <div className={`${classes.staff} ${classes.item}`}>
            <div className={classes.staffDiv}>
              <label htmlFor='role'>Role</label>
              <input
                disabled
                type='text'
                name='role'
                id='role'
                value={user.role}
              />
            </div>
            <div className={classes.staffDiv}>
              <label htmlFor='role'>Title</label>
              <input
                disabled
                type='text'
                name='role'
                id='role'
                value={user.title}
              />
            </div>
          </div>
          <div className={`${classes.btn} `}>

            {/* // if disabled is true show edit button */}
            {disabled ? (
              <button
                onClick={event => {
                  event.preventDefault();
                  setDisabled(!disabled);
                  toast.success('can edit now (name , email)', {
                    position: toast.POSITION.TOP_LEFT,
                  });
                }}
              >
                <FontAwesomeIcon icon={faUserGear} /> Edit
              </button>
            ) : (
              <button>
                <FontAwesomeIcon icon={faUserGear} /> Can Edit Now
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInformation;
