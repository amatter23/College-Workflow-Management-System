//creat a react component and and main component as arrow function
//and export it
import React, { useState } from 'react';
// improt main things need to creat route
import { Route, Routes } from 'react-router-dom';
// import all components
import Home from './Home/Home';
import Users from './Users/Users';
import Tasks from './tasks/Tasks';
import Vacation from './vacation/Vacation';

const Test = props => {
  //data from app componant to pass it to all componants
  const [data, updateDate] = useState(props.data);
  // function to add new user to the list of users from user componant
  const addNewUser = newData => {
    updateDate({
      ...data,
      users: [...data.users, newData],
    });
  };

  const deleteUser = id => {
    updateDate({
      ...data,
      users: data.users.filter(user => user.id !== id),
    });
  };
  const deleteTask = id => {
    updateDate({
      ...data,
      tasks: data.tasks.filter(task => task.id !== id),
    });
    console.log(id);
  };
  const deletevacation = id => {
    updateDate({
      ...data,
      vacations: data.vacations.filter(vacation => vacation.id !== id),
    });
    console.log(id);
  };
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              data={data}
              deleteTask={deleteTask}
              deletevacation={deletevacation}
            />
          }
        />
        <Route
          path='/users'
          element={
            <Users
              updateDataFa={addNewUser}
              data={data}
              deleteUserMain={deleteUser}
            />
          }
        />
        <Route
          path='/tasks'
          element={<Tasks data={data} deleteTask={deleteTask} />}
        />
        <Route
          path='/vacations'
          element={<Vacation data={data} deleteVacation={deletevacation} />}
        />
      </Routes>
    </div>
  );
};
export default Test;
