import React, { useState } from 'react';
import classes from './vacation.module.css';
import LogoUser from '../../Ui/LogoUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye, faCheckCircle, faSpinner, faCircleMinus } from '@fortawesome/free-solid-svg-icons';

const TaskRow = props => {

  const [status, updateStatus] = useState(props.Vacation.status);
  //creat function to adjust color of background of row with vacation status
  const statusColor = () => {
    if (status === 'pending') {
      return classes.pending;
    } else if (status === 'accepted') {
      return classes.approved;
    } else if (status === 'rejected') {
      return classes.rejected;
    }
  };
  const statusColorHover = () => {
    if (status === 'pending') {
      return classes.pendingHover;
    } else if (status === 'accepted') {
      return classes.approvedHover;
    } else if (status === 'rejected') {
      return classes.rejectedHover;
    }
  };
  const statusshape = () => {
    if (status === 'pending') {
      return <FontAwesomeIcon
      icon={faSpinner}
      className={classes.titleIcone}
    />
    } else if (status === 'accepted') {
      return <FontAwesomeIcon
      icon={faCheckCircle}
      className={classes.titleIcone}
    />
    } else if (status === 'rejected') {
      return <FontAwesomeIcon
      icon={faCircleMinus}
      className={classes.titleIcone}
    />
    }
  };


  return (
    <div className={`${statusColorHover()}`}>
    <div id={props.Vacation.id} className={`${classes.row} ${classes.con} ${statusColorHover()}`}>
      <div className={`${classes.item} ${classes.sender}`}>
      <LogoUser curentRole = {props.Vacation.sender.role}></LogoUser>
        <h2>{props.Vacation.sender.name}</h2>
      </div>
      <div className={`${classes.item} ${classes.type}`}>
        <h2>{props.Vacation.type}</h2>
      </div>

      <div className={`${classes.item} ${statusColor()}`}>
        <h2>{statusshape()}</h2>
      </div>
      <div
        id={props.Vacation.id}
        onClick={props.deleteVacation}
        className={`${classes.item} ${classes.trash}`}
      >
        <FontAwesomeIcon
          icon={faTrash}
          className={classes.icon}
          id={props.Vacation.id}
        />
      </div>
    </div>
    </div>
  );
};

export default TaskRow;
