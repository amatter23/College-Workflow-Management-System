import React from 'react';

const Test = props => {
  return (
    <>
      <select name='format' id='format'>
        {props.data.role.map(roles => {
          console.log(roles.name);
          return  <option value="pdf">{roles.name}</option>
        })}
      </select>
    </>
  );
};

export default Test;
