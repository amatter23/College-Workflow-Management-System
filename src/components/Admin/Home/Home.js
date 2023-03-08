import React, { useState } from 'react';
import Contaner from '../../Ui/Contaner';
// use css modules for style contaner componants
import classes from '../../Ui/contaner.module.css';
//componats to use
import Menu from '../Ui_admin/Menu';
import Nav from '../Ui_admin/Nav';
import TasksHome from './TasksHome';
import VacationsHome from './VacationsHome';
import UsersHomeData from './UsersHomeDate';
import styles from '.././Home/tasksHome.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFile,
  faFileInvoice,
  faList,
  faReceipt,
  faTasks,
  faArrowRight,
  faArrowLeft,
  faClock,
  faTrash,
  faLayerGroup,
  faCircle
} from '@fortawesome/free-solid-svg-icons';

import './home.css';

const Home = props => {
  const [data, updateDate] = useState(props.data);
  
  
  console.log(data);
  return (
    <Contaner type={classes.contaner_1}>
      <Contaner type={classes.contaner_2} gap={'var(--units)'}>
        <Contaner position={'relative'}>
          <Menu></Menu>
        </Contaner>
        <Contaner
          type={classes.contaner_3}
          flex='4'
          flexDirection='Column'
          backgroundColor={'var( --co1color)'}
          gap='var(--units)'
          borderRadius = "var(--units)"
        >
          <Nav></Nav>
          <TasksHome
            tapleName={'Tasks'}
            tapleIcone={
              <FontAwesomeIcon icon={faTasks} className={styles.titleIcone} />
            }
            briefTasks={data.tasks}
          ></TasksHome>
          <VacationsHome tapleName={'Vacattions'}
            tapleIcone={
              <FontAwesomeIcon icon={faTasks} className={styles.titleIcone} />
            }
            data={data.vecations}></VacationsHome>
        </Contaner>
        <Contaner
          type={classes.contaner_3}
          flex='1'
          backgroundColor={'var(--co2color)'}
          borderRadius={'0 var(--units)'}
        >
          <UsersHomeData users={data.users} roles={data.role}></UsersHomeData>
        </Contaner>
      </Contaner>
    </Contaner>
  );
};
export default Home;
