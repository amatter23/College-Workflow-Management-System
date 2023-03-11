import React, { useState } from 'react';
import classes from './delete.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const Delete = props => {
  const deleteItem = () => {
    props.deleteItem(props.id);
  };
  return (
    <button type='submit' className={classes.contaner} onClick={deleteItem}>
      <FontAwesomeIcon icon={faTrash} className={classes.faTrashIcone} />
    </button>
  );
};

export default Delete;
