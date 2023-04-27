import React, { useState, useEffect } from 'react';
import classes from './AdminUsers.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import UserTable from '../Ui/UserTable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addNewUser } from '../../Users/Events/getMainData';
const AdminUsers = () => {

  // add new users function
  const handelAddNewUser = async e => {
    e.preventDefault();
    try {
      // todo //userRole, UserTitle,userFirstName, userLastName userDepartment
      // todo wait for backend
      const response = await addNewUser(
        e.target[0].value,
        e.target[2].value,
        e.target[3].value
      );
      if (response.error === true) {
        toast.error('Try again later', {});

        setAddNewUserWindow(true);
      } else {
        toast.success('success');
        setAddNewUserWindow(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // state add new users window
  const [addNewUserWindow, setAddNewUserWindow] = useState(true);
  return (
    <div className={classes.container}>
      <ToastContainer />
      <div className={classes.header}>
        <h2>
          {' '}
          <FontAwesomeIcon icon={faUser} /> Users
        </h2>
        <div>
          <button
            onClick={() => {
              setAddNewUserWindow(false);
            }}
          >
            Add new user
          </button>
        </div>
      </div>
      <div className={classes.body}>
        <UserTable></UserTable>
      </div>

      <div
        style={
          addNewUserWindow
            ? { transform: 'translateX(100%)' }
            : { transform: 'translateX(0)' }
        }
        className={classes.addNewUserWindow}
      >
        <div className={classes.addNewUserWindowHeader}>
          <h2>Add new user</h2>
        </div>
        <div className={classes.body}>
          <form onSubmit={handelAddNewUser}>
            <div className={classes.formGroup}>
              <label htmlFor='userName'>User Name</label>
              <input type='text' name='userName' id='userName' />
            </div>
            <div className={classes.formGroup}>
              <label htmlFor='name'>Name</label>
              <input type='text' name='name' id='name' />
            </div>
            <div className={classes.formGroup}>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' id='email' />
            </div>
            <div className={classes.formGroup}>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' id='password' />
            </div>
            <div className={classes.formGroup}>
              <label htmlFor='role'>Role</label>
              <input type='text' name='role' id='role' />
            </div>
            <div className={classes.formGroup}>
              <label htmlFor='title'>title</label>
              <input type='title' name='title' id='title' />
            </div>
            <div className={classes.formGroup}>
              <label htmlFor='department'>Department</label>
              <input type='text' name='department' id='department' />
            </div>
            <div>
              <button>Save</button>
              <button
                onClick={e => {
                  e.preventDefault();
                  setAddNewUserWindow(true);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
