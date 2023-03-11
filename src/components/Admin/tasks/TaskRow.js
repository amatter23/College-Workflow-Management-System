import React, { useState } from 'react';
import classes from './tasks.module.css';
import LogoUser from '../../Ui/LogoUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons';

const TaskRow = props => {
  return (
    <div id={props.task.id} className={`${classes.row} ${classes.con}`}>
      <div className={`${classes.item} ${classes.name}`}>
        <h2>{props.task.title}</h2>
      </div>
      <div className={classes.item}>
        <LogoUser curentRole = {props.task.sender.role}></LogoUser>
        <h2>{props.task.sender.name}</h2>
      </div>

      <div className={`${classes.item} ${classes.role}`}>
      <LogoUser curentRole = {props.task.sender.role}></LogoUser>
        <h2>{props.task.receiver.name}</h2>
      </div>
      <div className={`${classes.item} `}>
        <h2>{props.task.deadline.toLocaleString('en-US', {
                  day: 'numeric',
                  month: 'numeric',
                  year: 'numeric',
                })}</h2>
      </div>
      <div
        id={props.task.id}
        onClick={props.deleteTask}
        className={`${classes.item} ${classes.trash}`}
      >
        <FontAwesomeIcon
          icon={faTrash}
          className={classes.icon}
          id={props.task.id}
        />
      </div>
    </div>
  );
};

export default TaskRow;
