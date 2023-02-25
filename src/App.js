//lip needed
import React, { useState } from 'react';
//dammy data
import AdminDate from './Data/DummyData';
//handel contaners
import Home from './components/Admin/Home/Home';



function App(props) {
  const [data, updateDate] = useState(AdminDate);

  return (
    <Home data= {data}></Home>
  );
}

export default App;
