import React, { useState, useEffect } from 'react';
import classes from './Actions.module.css';
import {
  searchTasks,
  getTask,
  updateTask,
  addResponsee,
  deleteTask,
} from '../Events/getMainData';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
const Actions = props => {
  const navigate = useNavigate();
  const actions = ['addResponse', 'editTask', 'deleteTask'];
  const [tasks, updateTasks] = useState([]);
  const [taskData, setTaskData] = useState();
  const [taskId, setTaskId] = useState(null);
  const location = useLocation();
  const actionType = location.state.action;
  // todo add task name selected when choose task
  // todo handel errors
  // search for tasks that have been sent or received
  const handelsearchTasks = e => {
    const searchValue = e.target.value;
    searchTasks(
      actionType === 'addResponse' ? '/received-tasks' : '/sent-tasks',
      searchValue,
      'false'
    ).then(data => {
      updateTasks(data.results);
    });
  };

  // get task data
  const getTaskData = async () => {
    const response = await getTask(
      taskId,
      actionType === 'addResponse' ? '/received-tasks' : '/sent-tasks'
    ).then(data => {
      setTaskData(data);
    });
  };

  // get task data when task id is changed
  useEffect(() => {
    getTaskData();
    console.log(taskId);
  }, [taskId]);

  // update task details when edit button is clicked
  const updateTaskDetails = async event => {
    event.preventDefault();
    const response = await updateTask(
      taskId,
      event.target.date.value,
      taskData.status,
      taskData.receivers.id,
      event.target.title.value
    )
      .then(data => {
        setTaskData(data);
        toast.success('Task Updated Successfully', {});
      })
      .then(() => {
        setTimeout(() => {
          navigate('/');
        }, 5000);
      });
  };

  const handlerAddResponse = async event => {
    event.preventDefault();
    const response = await addResponsee(
      event.target.title.value,
      event.target.description.value,
      null,
      taskId
    )
      .then(data => {
        toast.success('Response Added Successfully', {});
      })
      .then(() => {
        setTimeout(() => {
          navigate('/');
        }, 5000);
      });
  };

  const handlerdeleteTask = async event => {
    event.preventDefault();
    const response = await deleteTask(taskId)
      .then(data => {
        toast.success('Task Updated Successfully', {});
      })
      .then(() => {
        setTimeout(() => {
          navigate('/');
        }, 5000);
      });
  };
  const actionTypes = () => {
    if (taskId !== null) {
      if (actionType === 'addResponse') {
        return (
          <form onSubmit={handlerAddResponse} className={classes.addResponse}>
            {taskData.task_response === null ? (
              <>
                <label htmlFor=''>Title</label>
                <input id='title' type='text' />
                <label htmlFor=''>Description</label>
                <input id='description' type='text' />
                <label htmlFor=''>File</label>
                <input id='file' type='file' />
                <button>Add Response</button>
              </>
            ) : (
              <h3>This task have a response already</h3>
            )}
          </form>
        );
      } else if (actionType === 'deleteTask') {
        return (
          <div className={classes.deleteTask}>
            <button onClick={handlerdeleteTask}>Delete Task</button>
          </div>
        );
      } else if (actionType === 'editTask') {
        return (
          <form onSubmit={updateTaskDetails} className={classes.editTask}>
            <label htmlFor=''>Title</label>
            <input type='text' id='title' defaultValue={taskData.title} />
            <label htmlFor='date'>Due Date</label>
            <input id='date' defaultValue={taskData.deadline} type='Date' />
            <button>Edit</button>
          </form>
        );
      }
    }
  };
  return (
    <div className={classes.Actions}>
      <ToastContainer />
      <div className={classes.header}>
        <h1>Actions</h1>
      </div>
      <div className={classes.content}>
        <div className={classes.searchCom}>
          <input
            id='search'
            className={classes.search}
            type='text'
            placeholder='Search'
            onChange={handelsearchTasks}
          />
        </div>

        <div className={classes.taskCont}>
          {tasks.map(task => {
            return (
              <div
                onClick={() => {
                  setTaskId(task.id);
                }}
                className={classes.task}
                key={task.id}
              >
                <div className={classes.taskTitle}>
                  <h3 id={task.id}>{task.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
        {actionTypes()}
      </div>
    </div>
  );
};

export default Actions;
