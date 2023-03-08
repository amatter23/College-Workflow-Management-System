import React from 'react';
import classes from './btn.module.css';
const Btn = props => {
  const tt = 'disabled';
  
  return (
    <>
      <button
        disabled={props.states}
        className={`${props.class} `}
        type={props.type}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </>
  );
};

export default Btn;
