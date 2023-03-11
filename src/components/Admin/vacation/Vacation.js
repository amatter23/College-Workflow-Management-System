//creat react component
import React, { useState } from 'react';
import style from '../../Ui/contaner.module.css';
import classes from './vacation.module.css';
import Contaner from '../../Ui/Contaner';
import Menu from '../Ui_admin/Menu';
import Nav from '../Ui_admin/Nav';
import Btn from '../../Ui/Btn';
import btnstyle from '../../Ui/btn.module.css';
import LogoUser from '../../Ui/LogoUser';
import TaskRow from './VacationRow';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressBook,
  faArrowLeft,
  faArrowRight,
  faCircle,
  faCircleCheck,
  faCircleStop,
  faClock,
  faEnvelope,
  faEye,
  faFile,
  faFileInvoice,
  faLayerGroup,
  faList,
  faLock,
  faPlus,
  faSignature,
  faTrash,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
// creat react component
const Vacation = props => {


  const deleteVacation= event => {
    props.deleteVacation(event.target.id);
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
                <FontAwesomeIcon icon={faFileInvoice} className={classes.titleIcone} />
                <h1>Vacations</h1>
              </div>
            </div>
            <div className={classes.tapleOfUsers}>
              <div className={classes.content}>
                <div className={`${classes.header} ${classes.row}`}>
                  <div className={`${classes.item} ${classes.sender}`}>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className={classes.titleIcone}
                    />
                    <h2>Sender</h2>
                  </div>
                  <div className={classes.item}>
                    <FontAwesomeIcon
                      icon={faLayerGroup}
                      className={classes.titleIcone}
                    />
                    <h2>Type</h2>
                  </div>
                  <div className={classes.item}>
                    <FontAwesomeIcon
                      icon={faCircle}
                      className={classes.titleIcone}
                    />
                    <h2>States</h2>
                  </div>
                  <div className={classes.item}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className={classes.titleIcone}
                    />
                    
                  </div>
                  
                </div>
                {props.data.vacations.map(Vacation => {
                  return (
                    <TaskRow Vacation={Vacation} deleteVacation={deleteVacation}></TaskRow>
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

export default Vacation;
