import React, { useState } from 'react';
import classes from './Home.module.css';
import UserCard from '../Ui/UserCard';
import TaskTaple from '../Ui/TaskTaple';
import HeightLevelVecationTaple from '../Ui/HeightLevelVecationTaple';
import LowLevelVacationsTaple from '../Ui/LowLevelVacationsTaple';
import ActionCard from '../Ui/ActionCard';
import AddTask from '../Ui/AddTask';
import NavBar from '../Ui/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      <ToastContainer />
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
        <TaskTaple
          addTaskView={false}
          searchView={0}
          userData={userData}
        ></TaskTaple>
        {userData.role === 'dean' ||
        userData.role === 'head' ||
        userData.role === 'vice' ? (
          <HeightLevelVecationTaple
            userData={userData}
          ></HeightLevelVecationTaple>
        ) : (
          <LowLevelVacationsTaple userData={userData}></LowLevelVacationsTaple>
        )}
      </div>
    </div>
  );
};

export default HomeUsers;
