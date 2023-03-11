//need to figrout how can be creat a denamic icon
import React, { useState } from 'react';
import classes from './tasksHome.module.css';
import LogoUser from '../../Ui/LogoUser';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faFile,
  faList,
  faReceipt,
  faTrash,
  faD,
  faH,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';

import Delete from '../../Ui/Delete.js';

const TasksHome = props => {
  const [role, updaterrole] = useState('role');

  return (
    <div className={classes.tasks}>
      <div className={classes.header}>
        <div className={classes.title}>
          <Link className={classes.title} to='/tasks'>
            {props.tapleIcone}
            <h3>{props.tapleName}</h3>
          </Link>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faList}
            className={classes.titleIcone}
            
          />
        </div>
      </div>
      <div className={classes.tapleOfData}>
        <div className={`${classes.rows} ${classes.first}`}>
          <div className={`${classes.item} `}>
            <FontAwesomeIcon icon={faList} className={classes.titleIcone} />
            <h4>Title</h4>
          </div>
          <div className={classes.item}>
            <FontAwesomeIcon
              icon={faArrowRight}
              className={classes.titleIcone}
            />
            <h4>Sender</h4>
          </div>
          <div className={classes.item}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={classes.titleIcone}
            />
            <h4>receiver</h4>
          </div>
          <div className={classes.item}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={classes.titleIcone}
            />
            <h4>Deadline</h4>
          </div>
          <div className={classes.item}>
            <FontAwesomeIcon icon={faTrash} className={classes.titleIcone} />
            <h4>Dealete</h4>
          </div>
        </div>
        {props.briefTasks.tasks.length === 0 ? (
          <div className={classes.errorM}>
            <span>
              <FontAwesomeIcon
                icon={faFolderOpen}
                className={classes.titleIcone}
              />
            </span>
            Empty
          </div>
        ) : (
          props.briefTasks.tasks.map(task => (
            <div className={`${classes.rows} ${classes.columnContant}`}>
              <div className={`${classes.item} ${classes.title} `}>
                <h4>{task.title}</h4>
              </div>
              <div
                className={`${classes.item} ${classes.sen_res} ${classes.rowsx2}`}
              >
                <LogoUser curentRole={task.sender.role}></LogoUser>

                <h4>{task.sender.name}</h4>
              </div>
              <div
                className={`${classes.item} ${classes.sen_res} ${classes.rowsx2}`}
              >
                <LogoUser curentRole={task.receiver.role}></LogoUser>
                <h4>{task.receiver.name}</h4>
              </div>
              <div
                className={`${classes.item} ${classes.sen_res} ${classes.rowsx2}`}
              >
                {task.deadline.toLocaleString('en-US', {
                  day: 'numeric',
                  month: 'numeric',
                  year: 'numeric',
                })}
              </div>
              <div
                className={`${classes.item} ${classes.sen_res} ${classes.rowsx2}`}
              >
                <Delete id={task.id} deleteItem={props.deleteTask}></Delete>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TasksHome;
