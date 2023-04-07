import React, { useState, useEffect } from 'react';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { getUserData } from './Events/getMainData';
// import all components
import HomeUsers from './Pages/HomeUsers';
import AddTask from './Ui/AddTask';
import NavBar from './Ui/NavBar';
import classes from './UserRoute.module.css';
const TasksRoute = props => {
  return (
    <div className={classes.MainContaner}>
      <Outlet />
    </div>
  );
};
export default TasksRoute;
