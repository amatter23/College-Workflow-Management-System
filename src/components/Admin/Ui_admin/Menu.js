import React, { useState } from 'react';
import styles from './menu.module.css';
import Contaner from '../../Ui/Contaner';
import Home from '../Home/Home';
import Users from '../Users/Users';
import classes from '../../Ui/contaner.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressBook,
  faCoffee,
  faEnvelope,
  faFileInvoice,
  faGear,
  faHome,
  faLightbulb,
  faListCheck,
  faTable,
  faTableColumns,
} from '@fortawesome/free-solid-svg-icons';
import { createBrowserRouter, Routes, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';

const Menu = props => {
  //1-clike handler to nav bar
  // // const clickHandel = () => {
  // //   console.log('jkfhgdshjkgfdjshgfhjksd');
  // // };
  return (
    <Contaner
      type={styles.menu}
      backgroundColor={'var(--co5color)'}
      flexDirection={'column'}
    >
      <div className={styles.contener}>
      <Link to='/'>
      <FontAwesomeIcon icon={faTableColumns} className={styles.highlight} />
        </Link>
        
      </div>
      <div className={styles.contener}>
        <Link to='/'>
          <FontAwesomeIcon icon={faHome} className={styles.highlight} />
        </Link>
        <Link to='/users'>
          <FontAwesomeIcon icon={faAddressBook} className={styles.highlight} />
        </Link>
        <Link to='/tasks'>
          <FontAwesomeIcon icon={faListCheck} className={styles.highlight} />
        </Link>
        <Link to='/vacations'>
          <FontAwesomeIcon icon={faFileInvoice} className={styles.highlight} />
        </Link>
      </div>
      <div className={styles.contener}>
        <FontAwesomeIcon icon={faLightbulb} className={styles.highlight} />
        <FontAwesomeIcon icon={faGear} className={styles.highlight} />
      </div>
    </Contaner>
  );
};
export default Menu;
