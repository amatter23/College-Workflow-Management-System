//creat react component
import React, { useState } from 'react';
import style from '../../Ui/contaner.module.css';
import classes from './tasks.module.css';
import Contaner from '../../Ui/Contaner';
import Menu from '../Ui_admin/Menu';
import Nav from '../Ui_admin/Nav';
import Btn from '../../Ui/Btn';
import btnstyle from '../../Ui/btn.module.css';
import LogoUser from '../../Ui/LogoUser';
import TaskRow from './TaskRow';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressBook,
  faArrowLeft,
  faArrowRight,
  faClock,
  faEnvelope,
  faEye,
  faFile,
  faLayerGroup,
  faList,
  faLock,
  faPlus,
  faSignature,
  faTrash,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
// creat react component
const Tasks = props => {
 
  const deleteTask = event => {
    props.deleteTask(event.target.id);
  };
 
  return (
    <Contaner type={style.contaner_1}>
      <Contaner
        type={style.contaner_2}
        flexDirection={'row'}
        gap={'var(--units)'}
      >
        {/* menu contaner */}
        <Contaner>
          <Menu></Menu>
        </Contaner>

        {/* content contaner */}
        <Contaner
          type={style.contaner_3}
          flex={'1'}
          backgroundColor={'var( --co1color)'}
          borderRadius='var(--units)'
          flexDirection='Column'
          
        >
          {/* nav contaner */}
          <Nav></Nav>
          {/* content */}
          <div className={classes.content}>
            {/* header */}
            <div className={classes.header}>
              <div className={classes.title}>
                <FontAwesomeIcon
                  icon={faList}
                  className={classes.titleIcone}
                />
                <h1>Tasks</h1>
              </div>
            </div>
            <div className={classes.tapleOfUsers}>
              <div className={classes.content}>
                <div className={`${classes.header} ${classes.row}`}>
                  <div className={`${classes.item} ${classes.title}`}>
                    <FontAwesomeIcon
                      icon={faFile}
                      className={classes.titleIcone}
                    />
                    <h2>Title</h2>
                  </div>
                  <div className={classes.item}>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className={classes.titleIcone}
                    />
                    <h2>Sender</h2>
                  </div>
                  <div className={classes.item}>
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className={classes.titleIcone}
                    />
                    <h2>Resever</h2>
                  </div>
                  <div className={classes.item}>
                    <FontAwesomeIcon
                      icon={faClock}
                      className={classes.titleIcone}
                    />
                    <h2>Deadline</h2>
                  </div>
                  <div className={classes.item}>
                    <FontAwesomeIcon
                      icon={faLayerGroup}
                      className={classes.titleIcone}
                    />
                    <h2>Degree</h2>
                  </div>
                </div>
                {props.data.tasks.map(task => {
                      return (
                        <TaskRow
                        task = {task} deleteTask= {deleteTask}
                        ></TaskRow>
                      );
                  })}
              </div>
            </div>
          </div>
        </Contaner>
      </Contaner>
    </Contaner>
  );
};

export default Tasks;
