import React from 'react';
import classes from './btn.module.css';
const Btn = props => {
  const tt = 'disabled';
const test = () => {
  console.log('test');
}
  return (
    <>
      <button
        disabled={props.states}
        className={`${props.class} `}
        type={props.type}
        onClick={props.onClick}
      >
        {props.title} {props.icone}
      </button>
    </>
  );
};

export default Btn;
