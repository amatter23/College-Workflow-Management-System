import React, { useState } from 'react';
import classes from './Home.module.css';
import UserCard from '../Ui/UserCard';
import TaskTaple from '../Ui/TaskTaple';
import ActionCard from '../Ui/ActionCard';
import AddTask from '../Ui/AddTask';
import NavBar from '../Ui/NavBar';
const HomeUsers = props => {
  const [userData, updateUserData] = useState(props.userData);
  //accion card show by role
  const actionCard = () => {
    if (userData.role === 'dean') {
      return (
        <>
          <ActionCard ac={0}></ActionCard>
          <ActionCard ac={2}></ActionCard>
          <ActionCard ac={4}></ActionCard>
          <ActionCard ac={5}></ActionCard>
        </>
      );
    } else if (userData.role === 'head') {
      return (
        <>
          <ActionCard ac={0}></ActionCard>
          <ActionCard ac={2}></ActionCard>
          <ActionCard ac={4}></ActionCard>
          <ActionCard ac={5}></ActionCard>
          <ActionCard ac={3}></ActionCard>
        </>
      );
    } else if (userData.role === 'vice') {
      return (
        <>
          <ActionCard ac={0}></ActionCard>
          <ActionCard ac={2}></ActionCard>
          <ActionCard ac={4}></ActionCard>
          <ActionCard ac={5}></ActionCard>
          <ActionCard ac={3}></ActionCard>
        </>
      );
    } else if (userData.role === 'doctor' || userData.role === 'assistant') {
      return (
        <>
          <ActionCard ac={1}></ActionCard>
          <ActionCard ac={3}></ActionCard>
        </>
      );
    }
  };

  // open add task component
  const [addTask, updateAddTask] = useState(false);
  const openAddTaskModal = () => {
    updateAddTask(!addTask);
  };

  return (
    <div className={classes.contaner}>
      <div
        style={{ display: addTask ? 'flex' : 'none' }}
        className={classes.addUser_Contaner}
      ></div>

      <div className={classes.topPartContaner}>
        <div className={classes.topPart}>
          <div className={classes.userCardContaner}>
            <UserCard userData={userData}></UserCard>
          </div>
          <div className={classes.actionCardContaner}>{actionCard()}</div>
        </div>
      </div>
      <div className={classes.bottomPart}>
        <TaskTaple userData={userData}></TaskTaple>
        <TaskTaple userData={userData}></TaskTaple>
      </div>
    </div>
  );
};

export default HomeUsers;
