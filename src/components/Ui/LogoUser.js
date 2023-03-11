import React, {  } from 'react';
import classes from './LogoUser.module.css';

const LogoUser = props => {
  
 
  return (
    <span className={classes.logo}>
            {props.curentRole.charAt(0).toUpperCase()}
          </span>
  );
};

export default LogoUser;
