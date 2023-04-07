// *! this is a component for add and view task
// *! need to pass the id of the task to view it or not to pass it to add new task

import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Component } from 'react';
import Select from 'react-select';

import classes from './AddTask.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faEye,
  faCheckCircle,
  faSpinner,
  faCircleMinus,
  faCircleExclamation,
  faCircleCheck,
  faRectangleXmark,
} from '@fortawesome/free-solid-svg-icons';

import {
  getReceivers,
  getTask,
  createTask,
  updateTask,
} from '../../Users/Events/getMainData';
import { useNavigate } from 'react-router-dom';
const AddTask = props => {
  // view data to this task

  const [task, setTask] = useState([]);
  const [receivers, setReceivers] = useState([]);

  useEffect(() => {
    getReceivers().then(res => {
      setReceivers(res);
    });
  }, []);

  //navigate to the page of tasks
  const navigate = useNavigate();
  // add a new route function
  const addNewTask = event => {
    event.preventDefault();
    if (
      createTask(
        event.target[0].value,
        event.target[1].value,
        event.target[3].value,

        event.target[4].value
      ) === true
    ) {
    }

    navigate('/tasks');
  };

  // const [error, setresponse] = useState(false);
  // const [success, setSuccess] = useState(false);
  // const closepanal = () => {
  //   setresponse(false);
  //   setSuccess(false);
  // };

  return (
    <div className={classes.contaner}>
      <div className={classes.back}>
        {/* {error ? (
          <div className={classes.error}>
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className={classes.icon}
            />
            <p>Something went wrong</p>
            <button onClick={closepanal}> Try Again</button>
          </div>
        ) : null}
        {success ? (
          <div className={classes.success}>
            <FontAwesomeIcon icon={faCircleCheck} className={classes.icon} />
            <p>Action success</p>
            <button onClick={closepanal}> Done</button>
          </div>
        ) : null} */}
        <div className={classes.form}>
          <div className={classes.header}>
            <h1 onClick={props.openAddTaskModal}>Task</h1>
            <div className={classes.close}>
              <FontAwesomeIcon
                onClick={props.openAddTaskModal}
                className={classes.closeIcone}
                icon={faRectangleXmark}
              />
            </div>
          </div>
          <div className={classes.body}>
            <form onSubmit={addNewTask}>
              <div className={classes.input}>
                <label className={classes.test} htmlFor='title'>
                  Title
                </label>
                <input
                  type='text'
                  name='title'
                  id='title'
                  defaultValue={task.title}
                  placeholder='Write a task title'
                />
              </div>
              <div className={`${classes.input} ${classes.description}`}>
                <label htmlFor='description'>Description</label>
                <input
                  type='text'
                  name='description'
                  id='description'
                  defaultValue={task.description}
                  placeholder='Write a task description'
                />
              </div>
              <div className={classes.input}>
                <label htmlFor='attachment'>Attachment</label>
                <input
                  type='file'
                  name='attachment'
                  id='attachment'
                  defaultValue={null}
                />
              </div>
              <div className={classes.input}>
                <label htmlFor='deadline'>Deadline</label>
                <input
                  type='date'
                  name='deadline'
                  id='deadline'
                  defaultValue={task.deadline}
                />
              </div>
              <div className={classes.input}>
                <label htmlFor='receivers'>Receivers</label>
                <select htmlFor='receivers' id='receivers'>
                  {receivers.map(post => (
                    <option key={post.id} value={post.id}>
                      {post.user}
                    </option>
                  ))}
                </select>
              </div>

              <div className={classes.input}>
                <button> Add Task</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
