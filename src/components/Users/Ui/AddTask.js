// *! this is a component for add and view task
// *! need to pass the id of the task to view it or not to pass it to add new task

import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Component } from 'react';
import Select from 'react-select';
import UserLogo from './UserLogo';
import classes from './AddTask.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  // const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getReceivers().then(res => {
      console.log(res);
      setReceivers(res);
    });
  }, []);

  //navigate to the page of tasks
  const navigate = useNavigate();
  // add a new route function

  const addNewTask = async event => {
    const id = toast.loading('Please wait...');
    event.preventDefault();
    let uploadedFile = document.getElementById('file').files[0];
    var form_data = new FormData();
    form_data.append('file', uploadedFile);
    form_data.append('title', event.target[0].value);
    form_data.append('description', event.target[1].value);
    form_data.append('deadline', event.target[3].value);
    form_data.append('receivers', event.target[4].value);
    try {
      const response = await createTask(form_data);
      toast.update(id, {
        render: 'All is good',
        type: 'success',
        isLoading: false,
      });
    } catch (error) {
      toast.update(id, {
        render: 'Something went wrong!',
        type: 'error',
        isLoading: false,
      });
    }
    setTimeout(() => {
      navigate('/tasks');
    }, 1000);
  };
  return (
    <div className={classes.contaner}>
      <ToastContainer />
      <div className={classes.back}>
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
                <input id='file' name='file' type='file' />
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
                      <UserLogo role={post.role}></UserLogo> {post.user}
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
