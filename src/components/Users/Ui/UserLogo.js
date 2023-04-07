// create react component
import React, { useState } from 'react';
import classes from './UserLogo.module.css';
import AddTask from './AddTask';

const UserLogo = props => {
  return <span className={classes.logo}>{`${props.role}`.charAt(0).toUpperCase()}</span>;
};

export default UserLogo;
