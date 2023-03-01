//need to figrout how can be creat a denamic icon
import React, { useState } from 'react';
import classes from './tasksHome.module.css';
import LogoUser from '../../Ui/LogoUser';
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
  const clickHandler = () => {};
  const deleteItem = id => {
    updateData(current => current.filter(tasks => tasks.id !== id));
  };
  const [tasks, updateData] = useState(props.briefTasks);

  const [role, updaterrole] = useState('role');

  return (
    <div className={classes.tasks}>
      <div className={classes.header}>
        <div className={classes.title}>
          {props.tapleIcone}
          <h3>{props.tapleName}</h3>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faList}
            className={classes.titleIcone}
            onClick={clickHandler}
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
            <h4>Resever</h4>
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
        {tasks.length === 0 ? (
          <div className={classes.errorM}><span><FontAwesomeIcon icon={faFolderOpen} className={classes.titleIcone} /></span>Empty</div>
        ) : (
          tasks.map(task => (
            <div
              className={`${classes.rows} ${classes.columnContant}`}
              onSubmit={deleteItem}
            >
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
                <LogoUser curentRole={task.resever.role}></LogoUser>
                <h4>{task.resever.name}</h4>
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
                <Delete id={task.id} deleteItem={deleteItem}></Delete>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TasksHome;
