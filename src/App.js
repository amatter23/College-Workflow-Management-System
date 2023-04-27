//lip needed
import React, { useState, useEffect } from 'react';
//dammy data
import AdminDate from './Data/DummyData';
//handel contaners
import Home from './components/Admin/Home/Home';
import Delete from './components/Ui/Delete.js';
import Login from './components/Login/Login';
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
import TaskOptions from './components/Users/Ui/TaskOptions';
import Actions from './components/Users/Pages/Actions';
import AdminRoute from './components/AdminNewV/AdminRoute';
import UserTable from './components/AdminNewV/Ui/UserTable';
import AdminUsers from './components/AdminNewV/Pages/AdminUsers';
import AdminTasks from './components/AdminNewV/Pages/AdminTasks';
import UserInformation from './components/Users/Pages/UserInformation';
import { checkAuth, loginPageRedirect } from './components/Users/Events/auth';
import { getUserData } from './components/Users/Events/getMainData';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

function App(props) {
  const [data, updateDate] = useState(AdminDate);
  const [isLoading, setIsLoading] = useState(true);
  // Initial fetch of data
  //user Data
  const [userData, updateUserData] = useState({});
  // get data of user when app is created

  const fetchData = async () => {
    try {
      const response = await getUserData().then(data => {
        updateUserData({
          full_name: data.staff.user,
          first_name: data.first_name,
          last_name: data.last_name,
          role: data.staff.role,
          id: data.id,
          title: data.staff.title,
          email: data.email,
          staff: data.staff,
        });
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
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
          loader: loginPageRedirect,
        },
        {
          path: '/addTask',
          element: <AddTask />,
          loader: checkAuth,
        },
        {
          path: `/TaskDetails`,
          element: <TaskDetails />,
          loader: checkAuth,
        },
        {
          path: `/TaskOptions`,
          element: <TaskOptions />,
          loader: checkAuth,
        },
        {
          path: `/UserAccount`,
          element: <UserInformation userData={userData} />,
          loader: checkAuth,
        },
        {
          path: `/Actions`,
          element: <Actions userData={userData} />,
          loader: checkAuth,
        },
      ],
    },
  ]);
  const routerAdmin = createBrowserRouter([
    {
      path: '/',
      element: <AdminRoute userData={userData} />,
      children: [
        {
          path: '/',
          element: <AdminUsers />,
          loader: checkAuth,
        },
        {
          path: '/tasks',
          element: <AdminTasks />,
          loader: checkAuth,
        },
        {
          path: '/auth',
          element: <Login />,
          loader: loginPageRedirect,
        },
        
      ],
    },
  ]);
  return (
    <>
      {isLoading ? (
        <h1>loading</h1>
      ) : userData.staff === undefined ? (
        <RouterProvider router={routerAdmin} />
      ) : (
        <RouterProvider router={routerUser} />
      )}
    </>
  );
}

export default App;
