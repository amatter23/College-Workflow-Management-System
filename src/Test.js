import React, { useState } from 'react';

const Test = props => {
  const [data, setData] = useState();
  
  return (
    <>
      <select name='format' id='format'>
        {props.data.role.map(roles => {
          console.log(roles.name);
          return <option value='pdf'>{roles.name}</option>;
        })}
      </select>
    </>
  );
};

export default Test;
