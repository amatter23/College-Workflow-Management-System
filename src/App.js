//lip needed
import React, { useState } from 'react';
//dammy data
import AdminDate from './Data/DummyData';
//handel contaners
import Home from './components/Admin/Home/Home';
import Delete from './components/Ui/Delete.js';
import Login from './components/Login/Login';
import AdminRoute from './components/Admin/AdminRoute';

import { BrowserRouter } from 'react-router-dom';
function App(props) {
  const [data, updateDate] = useState(AdminDate);

  const updateDateFa = newData => {
  };

  return (
    <>
      <AdminRoute 
 updateData={updateDateFa} data={data}></AdminRoute>
    </>
  );
}

export default App;
