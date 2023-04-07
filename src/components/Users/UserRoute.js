import React, { useState, useEffect } from 'react';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { getUserData } from './Events/getMainData';
// import all components
import HomeUsers from './Pages/HomeUsers';
import AddTask from './Ui/AddTask';
import NavBar from './Ui/NavBar';
import classes from './UserRoute.module.css';
const UserRoute = props => {
  return (
    <div className={classes.MainContaner}>
      <NavBar userData={props.userData} />
      <Outlet />
    </div>
  );
};
export default UserRoute;
