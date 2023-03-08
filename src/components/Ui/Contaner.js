import React from 'react';
import classes from './contaner.module.css';
const Contaner = props => {
  return (
    <div
      className={`${props.type} ${props.type - 2}`}
      style={{
        flexDirection: props.flexDirection,
        backgroundColor: props.backgroundColor,
        width: props.width,
        position: props.position,
        gap: props.gap,
        borderRadius: props.borderRadius,
        flex: props.flex,
        borderRadius: props.borderRadius
      }}
    >
      {props.children}
    </div>
  );
};

export default Contaner;
