import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import all components
// import HomeUsers from './Pages/HomeUsers';
// import AddTask from './Ui/AddTask';
import NavBar from '../Users/Ui/NavBar';
import classes from './AdminRoute.module.css';
const AdminRoute = props => {
  return (
    
    <div className={classes.MainContaner}>
      
      <NavBar userData={props.userData} />
      <Outlet />
    </div>
  );
};
export default AdminRoute;
