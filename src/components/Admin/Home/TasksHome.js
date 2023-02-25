import React, { useState } from 'react';
import classes from './tasksHome.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faFile,
  faList,
  faReceipt,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

// requird to define a css file with parent componant
//require to figrout how can pass a id or any thing to make a route

const TasksHome = props => {
  const clickHandler = () => {};
  const [tasks, updateData] = useState(props.briefTasks);
  console.log(tasks[0].title);

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
            <FontAwesomeIcon icon={faFile} className={classes.titleIcone} />
            <h4>Sender</h4>
          </div>
          <div className={classes.item}>
            <FontAwesomeIcon
              icon={faArrowRight}
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
        {tasks.map(task => (
          <div className={`${classes.rows} ${classes.columnContant}`}>
            <div className={`${classes.item} ${classes.title}`}>
              <h4>{task.title}</h4>
            </div>
            <div className={`${classes.item} ${classes.sen_res}`}>
              <FontAwesomeIcon icon={faFile} className={classes.titleIcone} />
              <h4>{task.sender.name}</h4>
            </div>
            <div className={`${classes.item} ${classes.sen_res}`}>
              <FontAwesomeIcon
                icon={faArrowRight}
                className={classes.titleIcone}
              />
              <h4>{task.resever.name}</h4>
            </div>
            <div className={classes.item}>
              <FontAwesomeIcon
                icon={faTrash}
                className={classes.titleIcone}
                onClick={''}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksHome;
