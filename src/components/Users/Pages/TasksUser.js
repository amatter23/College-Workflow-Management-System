import React, { useState } from 'react';
import UserCard from '../Ui/UserCard';
import TaskTaple from '../Ui/TaskTaple';
import ActionCard from '../Ui/ActionCard';
import AddTask from '../Ui/AddTask';
import NavBar from '../Ui/NavBar';
import classes from './TasksUser.module.css';
const Tasks = props => {
  return (
    <div className={classes.con}>
      <TaskTaple></TaskTaple>
    </div>
  );
};

export default Tasks;
