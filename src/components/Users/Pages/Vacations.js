import React, { useState } from 'react';
import classes from './Vacations.module.css';
import UserCard from '../Ui/UserCard';
import HeightLevelVecationTaple from '../Ui/HeightLevelVecationTaple';
import LowLevelVacationsTaple from '../Ui/LowLevelVacationsTaple';
import ActionCard from '../Ui/ActionCard';
import AddTask from '../Ui/AddTask';
import NavBar from '../Ui/NavBar';
const Tasks = props => {
  return (
    <div className={classes.con}>
      {props.userData.role === 'dean' ||
      props.userData.role === 'head' ||
      props.userData.role === 'vice' ? (
        <>
          <HeightLevelVecationTaple
            userData={props.userData}
          ></HeightLevelVecationTaple>
        </>
      ) : (
        <>
          <LowLevelVacationsTaple
            userData={props.userData}
          ></LowLevelVacationsTaple>
        </>
      )}
    </div>
  );
};

export default Tasks;
