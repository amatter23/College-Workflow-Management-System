//lip needed
import React, { useState, useEffect } from 'react';
//dammy data
import AdminDate from './Data/DummyData';
//handel contaners
import Home from './components/Admin/Home/Home';
import Delete from './components/Ui/Delete.js';
import Login from './components/Login/Login';
import AdminRoute from './components/Admin/AdminRoute';
import UserRoute from './components/Users/UserRoute';
import ActionCard from './components/Users/Ui/ActionCard';
import UserCard from './components/Users/Ui/UserCard';
import Test from './Test';
import TaskTaple from './components/Users/Ui/TaskTaple';
import HomeUsers from './components/Users/Pages/HomeUsers';
import AddTask from './components/Users/Ui/AddTask';
import NavBar from './components/Users/Ui/NavBar';
import Users from './components/Admin/Users/Users';
import Tasks from './components/Admin/tasks/Tasks';
import TasksUser from './components/Users/Pages/TasksUser';
import Vacation from './components/Admin/vacation/Vacation';
import TaskDetails from './components/Users/Ui/TaskDetails';
import TaskDetailsTest from './components/Users/Ui/TaskDetails';
import { checkAuth } from './components/Users/Events/auth';
import { getUserData } from './components/Users/Events/getMainData';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

function App(props) {
  const [data, updateDate] = useState(AdminDate);

  //user Data
  const [userData, updateUserData] = useState({});
  // get data of user when app is created
  useEffect(() => {
    getUserData().then(data => {
      updateUserData({
        full_name: data.staff.user,
        first_name: data.first_name,
        role: data.staff.role,
        id: data.id,
        title: data.staff.title,
      });
    });
  }, []);

  const routerUser = createBrowserRouter([
    {
      path: '/',
      element: <UserRoute userData={userData} />,
      children: [
        {
          path: '/',
          element: <HomeUsers userData={userData} />,
          loader: checkAuth,
        },
        {
          path: 'tasks',
          element: <TasksUser userData={userData} />,
          loader: checkAuth,
        },

        {
          path: '/auth',
          element: <Login />,
        },
        {
          path: '/addTask',
          element: <AddTask />,
          loader: checkAuth,
        },
        {
          path: `/TaskDetails`,
          element: <TaskDetails/>,
          loader: checkAuth,
        },
      ],
    },
  ]);
  return userData.role === 'admin' ? (
    <AdminRoute data={data} />
  ) : (
    <RouterProvider router={routerUser} />
  );
}

export default App;
