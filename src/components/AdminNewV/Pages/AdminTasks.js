import React, { useState, useEffect } from 'react';
import classes from './AdminUsers.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import TasksTables from '../Ui/TasksTables';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addNewUser } from '../../Users/Events/getMainData';
const AdminTasks = () => {

  // new user add
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
  // state for add new user window
  const [addNewUserWindow, setAddNewUserWindow] = useState(true);
  return (
    <div className={classes.container}>
      <ToastContainer />
      <div className={classes.header}>
        <h2>
          {' '}
          <FontAwesomeIcon icon={faUser} /> Users
        </h2>
        
      </div>
      <div className={classes.body}>
        <TasksTables></TasksTables>
      </div>

    </div>
  );
};

export default AdminTasks;
