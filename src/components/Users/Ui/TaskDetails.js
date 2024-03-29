// CREATE REACT COMPONENT
import React, { useEffect, useState } from 'react';
import classes from './TaskDetails.module.css';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserLogo from './UserLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faCircleDown,
  faDiagramNext,
  faFileLines,
  faPaperclip,
  faCheck,
  faSquareCheck,
  faReply,
} from '@fortawesome/free-solid-svg-icons';
import {
  getTask,
  updateTask,
  addResponsee,
  api_url,
} from '../Events/getMainData';
const TaskDetailsTest = props => {
  // this componant need taskOrder to know this task sendet or resved
  // and task id to get task data

  // get task id and task order from task
  const location = useLocation();
  const taskId = location.state.taskId;
  const taskOrder = location.state.taskOrder;
  // task and task res data
  const [taskData, setTaskData] = useState({});
  const [taskRes, setTaskRes] = useState({});
  // show edit btn
  const [btnEdit, setBtnEdit] = useState(false);
  // get task data
  const [isLoading, setIsLoading] = useState(true);
  // Initial fetch of data
  useEffect(() => {
    fetchData();
  }, []);
  // get task data
  const fetchData = async () => {
    try {
      const response = await getTask(taskId, taskOrder);
      console.log(taskOrder);
      setTaskData(response);
      setIsLoading(false);
      console.log(taskOrder);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  // edit task
  const editTask = async event => {
    event.preventDefault();
    const id = toast.loading('Please wait...');

    try {
      const response = await updateTask(
        taskId,
        document.getElementById('date').value,
        false,
        taskData.receivers.id
      );
      toast.update(id, {
        render: 'All is good',
        type: 'success',
        isLoading: false,
      });
    } catch (error) {
      toast.update(id, { render: 'Error', type: 'error', isLoading: false });
    }
  };
  // done task
  const doneTask = async event => {
    const id = toast.loading('Please wait...');
    try {
      const response = await updateTask(
        taskId,
        document.getElementById('date').value,
        true,
        taskData.receivers.id
      );
      toast.update(id, {
        render: 'All is good',
        type: 'success',
        isLoading: false,
      });
    } catch (error) {
      toast.update(id, { render: 'Error', type: 'error', isLoading: false });
    }
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  const [file, setFile] = useState(null);
  const getFileData = e => {
    setFile(e.target.files[0]);
  };
  const addResponse = async event => {
    event.preventDefault();
    console.log(event);
    let uploadedFile = document.getElementById('file').files[0];
    var form_data = new FormData();
    form_data.append('file', uploadedFile);
    form_data.append('title', event.target[0].value);
    form_data.append('description', event.target[1].value);
    form_data.append('task', taskId);
    const id = toast.loading('Please wait...');

    try {
      const response = await addResponsee(form_data);
      toast.update(id, {
        render: 'All is good',
        type: 'success',
        isLoading: false,
      });
    } catch (error) {
      toast.update(id, { render: 'Error', type: 'error', isLoading: false });
    }
  };
  // function to retarive componant by task order and task response
  // tasks assigned done
  //*! todo tasks resived need to be done
  const taskResWindowTaskSendet = () => {
    if (taskOrder === '/sent-tasks' && taskData.task_response === null) {
      return (
        <div className={classes.contaner}>
          <div className={classes.left}>
            <div className={classes.leftContaner}>
              <div className={classes.taskInf}>
                <h2>{taskData.title}</h2>
                <div className={classes.taskDes}>
                  <h3>
                    <FontAwesomeIcon
                      onClick={props.openAddTaskModal}
                      className={classes.icone}
                      icon={faFileLines}
                    />{' '}
                    Description
                  </h3>
                  <p>{taskData.description}</p>
                </div>
              </div>
              <div className={classes.taskRes}>
                <h3>Task Response...</h3>
                <h3>No Response yet</h3>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.rightContaner}>
              <ToastContainer />
              {/* <div className={classes.tasksList}>
                <h3>Task</h3>
                <select name='cars' id='cars'>
                  <option value='volvo'>Create a taple to graed 4</option>
                  <option value='saab'>Saab</option>
                  <option value='mercedes'>Mercedes</option>
                  <option value='audi'>Audi</option>
                </select>
              </div> */}
              <div onSubmit={editTask} className={classes.attributes}>
                <div className={classes.header}>
                  <h3>Attributes</h3>
                  <FontAwesomeIcon
                    onClick={props.openAddTaskModal}
                    // className={classes.icone}
                    icon={faDiagramNext}
                  />
                </div>
                <div className={classes.item}>
                  <label htmlFor='status'>Status</label>
                  {taskData.status ? (
                    <>
                      <h2
                        style={{
                          color: ' var(--color1)',
                          backgroundColor: 'var(--color11)',
                        }}
                      >
                        Done
                      </h2>
                    </>
                  ) : (
                    <>
                      <h2>Open</h2>
                    </>
                  )}
                </div>
                <div className={classes.item}>
                  <label htmlFor='date'>Due Date</label>
                  <input
                    id='date'
                    defaultValue={taskData.deadline}
                    type='Date'
                    onChange={e => {
                      setBtnEdit(true);
                    }}
                  />
                </div>
                <div className={classes.item}>
                  <label htmlFor=''>Attachment </label>
                  {/* <input value={taskData.file} type='file' /> */}
                  <a className={classes.dowBtn} href={taskData.file}>
                    Download{' '}
                    <FontAwesomeIcon
                      onClick={props.openAddTaskModal}
                      // className={classes.icone}
                      icon={faCircleDown}
                    />
                  </a>
                </div>
                <div>
                  <div className={classes.item}>
                    <label htmlFor=''>Sender</label>
                    <div className={classes.name}>
                      <UserLogo role={taskData.staff.role} />
                      <h3>{taskData.staff.user}</h3>
                    </div>
                  </div>
                  <div className={classes.item}>
                    <label htmlFor=''>Receiver</label>
                    <div className={classes.name}>
                      <UserLogo role={taskData.receivers.role} />
                      <h3>{taskData.receivers.user}</h3>
                    </div>
                  </div>
                </div>

                {btnEdit ? <button onClick={editTask}>Edit</button> : ''}
                {taskData.status ? (
                  ''
                ) : (
                  <button onClick={doneTask}>
                    Make it done <FontAwesomeIcon icon={faSquareCheck} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (taskOrder === '/sent-tasks' && taskData.task_response !== null) {
      return (
        <div className={classes.contaner}>
          <div className={classes.left}>
            <div className={classes.leftContaner}>
              <div className={classes.taskInf}>
                <h2>{taskData.title}</h2>
                <div className={classes.taskDes}>
                  <h3>
                    <FontAwesomeIcon
                      onClick={props.openAddTaskModal}
                      className={classes.icone}
                      icon={faFileLines}
                    />{' '}
                    Description
                  </h3>
                  <p>{taskData.description}</p>
                </div>
              </div>
              <div className={classes.taskRes}>
                <h3>Task Response...</h3>
                <form action=''>
                  <div>
                    <h3>{taskData.task_response.title}</h3>
                  </div>
                  <div className={classes.taskResDes}>
                    <label htmlFor=''>
                      {' '}
                      <span>
                        <FontAwesomeIcon
                          onClick={props.openAddTaskModal}
                          className={classes.icone}
                          icon={faFileLines}
                        />
                      </span>{' '}
                      Description
                    </label>
                    <b name='' id='' cols='30' rows='10'>
                      {taskData.task_response.description}
                    </b>
                  </div>
                  <div className={classes.bottomn}>
                    <div
                      style={{ flexDirection: 'row' }}
                      className={classes.taskResFile}
                    >
                      <label htmlFor=''>
                        {' '}
                        <span>
                          <FontAwesomeIcon
                            onClick={props.openAddTaskModal}
                            className={classes.icone}
                            icon={faPaperclip}
                          />
                        </span>{' '}
                        Attachment
                      </label>
                      {/* <input value={taskData.file} type='file' /> */}
                      <a className={classes.dowBtn} href={taskData.file}>
                        Download
                        <FontAwesomeIcon
                          onClick={props.openAddTaskModal}
                          // className={classes.icone}
                          icon={faCircleDown}
                        />
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.rightContaner}>
              <ToastContainer />
              {/* <div className={classes.tasksList}>
                <h3>Task</h3>
                <select name='cars' id='cars'>
                  <option value='volvo'>Create a taple to graed 4</option>
                  <option value='saab'>Saab</option>
                  <option value='mercedes'>Mercedes</option>
                  <option value='audi'>Audi</option>
                </select>
              </div> */}
              <div onSubmit={editTask} className={classes.attributes}>
                <div className={classes.header}>
                  <h3>Attributes</h3>
                  <FontAwesomeIcon
                    onClick={props.openAddTaskModal}
                    // className={classes.icone}
                    icon={faDiagramNext}
                  />
                </div>
                <div className={classes.item}>
                  <label htmlFor='status'>Status</label>
                  {taskData.status ? (
                    <>
                      <h2
                        style={{
                          color: ' var(--color1)',
                          backgroundColor: 'var(--color11)',
                        }}
                      >
                        Done
                      </h2>
                    </>
                  ) : (
                    <>
                      <h2>Open</h2>
                    </>
                  )}
                </div>
                <div className={classes.item}>
                  <label htmlFor='date'>Due Date</label>
                  <input
                    id='date'
                    defaultValue={taskData.deadline}
                    type='Date'
                    onChange={e => {
                      setBtnEdit(true);
                    }}
                  />
                </div>
                <div className={classes.item}>
                  <label htmlFor=''>Attachment </label>
                  {/* <input value={taskData.file} type='file' /> */}
                  <a className={classes.dowBtn} href={taskData.file}>
                    Download
                    <FontAwesomeIcon
                      onClick={props.openAddTaskModal}
                      // className={classes.icone}
                      icon={faCircleDown}
                    />
                  </a>
                </div>
                <div>
                  <div className={classes.item}>
                    <label htmlFor=''>Sender</label>
                    <div className={classes.name}>
                      <UserLogo role={taskData.staff.role} />
                      <h3>{taskData.staff.user}</h3>
                    </div>
                  </div>
                  <div className={classes.item}>
                    <label htmlFor=''>Resever</label>
                    <div className={classes.name}>
                      <UserLogo role={taskData.receivers.role} />
                      <h3>{taskData.receivers.user}</h3>
                    </div>
                  </div>
                </div>
                {btnEdit ? <button onClick={editTask}>Edit</button> : ''}
                {taskData.status ? (
                  ''
                ) : (
                  <button onClick={doneTask}>
                    Make it done <FontAwesomeIcon icon={faSquareCheck} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (
      taskOrder === '/received-tasks' &&
      taskData.task_response === null
    ) {
      return (
        <div className={classes.contaner}>
          <div className={classes.left}>
            <div className={classes.leftContaner}>
              <div className={classes.taskInf}>
                <h2>{taskData.title}</h2>
                <div className={classes.taskDes}>
                  <h3>
                    <FontAwesomeIcon
                      onClick={props.openAddTaskModal}
                      className={classes.icone}
                      icon={faFileLines}
                    />
                    Description
                  </h3>
                  <p>{taskData.description}</p>
                </div>
              </div>
              {taskData.status ? (
                <div className={classes.taskRes}>
                  <h3>Task Response...</h3>
                  <h3>don't worry Task is done don't need a response</h3>
                </div>
              ) : (
                <div className={classes.taskRes}>
                  <div className={classes.title}>
                    <h3>Task Response...</h3>
                  </div>

                  <form onSubmit={addResponse}>
                    <div className={classes.taskResDes}>
                      <label htmlFor='description'>
                        <span>
                          <FontAwesomeIcon
                            onClick={props.openAddTaskModal}
                            className={classes.icone}
                            icon={faFileLines}
                          />
                        </span>{' '}
                        Title
                      </label>
                      <input autoFocus id='title' type='text' />
                    </div>
                    <div className={classes.taskResDes}>
                      <label htmlFor='description'>
                        <span>
                          <FontAwesomeIcon
                            onClick={props.openAddTaskModal}
                            className={classes.icone}
                            icon={faFileLines}
                          />
                        </span>{' '}
                        Description
                      </label>
                      <textarea id='description' cols='30' rows='10'></textarea>
                    </div>
                    <div className={classes.bottomn}>
                      <div
                        style={{ flexDirection: 'row' }}
                        className={classes.taskResFile}
                      >
                        <label htmlFor='file'>
                          <span>
                            <FontAwesomeIcon
                              onClick={props.openAddTaskModal}
                              className={classes.icone}
                              icon={faPaperclip}
                            />
                          </span>{' '}
                          Attachment
                        </label>
                        {/* <input value={taskData.file} type='file' /> */}
                        <input id='file' name='file' type='file' />
                      </div>
                      <button>
                        Add Response <FontAwesomeIcon icon={faReply} />
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.rightContaner}>
              <ToastContainer />
              {/* <div className={classes.tasksList}>
              <h3>Task</h3>
              <select name='cars' id='cars'>
                <option value='volvo'>Create a taple to graed 4</option>
                <option value='saab'>Saab</option>
                <option value='mercedes'>Mercedes</option>
                <option value='audi'>Audi</option>
              </select>
            </div> */}
              <div onSubmit={editTask} className={classes.attributes}>
                <div className={classes.header}>
                  <h3>Attributes</h3>
                  <FontAwesomeIcon
                    onClick={props.openAddTaskModal}
                    // className={classes.icone}
                    icon={faDiagramNext}
                  />
                </div>
                <div className={classes.item}>
                  <label htmlFor='status'>Status</label>
                  {taskData.status ? (
                    <>
                      <h2
                        style={{
                          color: ' var(--color1)',
                          backgroundColor: 'var(--color11)',
                        }}
                      >
                        Done
                      </h2>
                    </>
                  ) : (
                    <>
                      <h2>Open</h2>
                    </>
                  )}
                </div>
                <div className={classes.item}>
                  <label htmlFor='date'>Due Date</label>
                  <input
                    id='date'
                    value={taskData.deadline}
                    type='Date'
                    // onChange={e => {
                    //   setBtnEdit(true);
                    // }}
                  />
                </div>
                <div className={classes.item}>
                  <label htmlFor=''>Attachment </label>
                  {/* <input value={taskData.file} type='file' /> */}
                  <a className={classes.dowBtn} href={taskData.file}>
                    Download
                    <FontAwesomeIcon
                      onClick={props.openAddTaskModal}
                      // className={classes.icone}
                      icon={faCircleDown}
                    />
                  </a>
                </div>
                <div>
                  <div className={classes.item}>
                    <label htmlFor=''>Sender</label>
                    <div className={classes.name}>
                      <UserLogo role={taskData.staff.role} />
                      <h3>{taskData.staff.user}</h3>
                    </div>
                  </div>
                  <div className={classes.item}>
                    <label htmlFor=''>Receiver</label>
                    <div className={classes.name}>
                      <UserLogo role={taskData.receivers.role} />
                      <h3>{taskData.receivers.user}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (
      taskOrder === '/received-tasks' &&
      taskData.task_response !== null
    ) {
      return (
        <div className={classes.contaner}>
          <div className={classes.left}>
            <div className={classes.leftContaner}>
              <div className={classes.taskInf}>
                <h2>{taskData.title}</h2>
                <div className={classes.taskDes}>
                  <h3>
                    <FontAwesomeIcon
                      onClick={props.openAddTaskModal}
                      className={classes.icone}
                      icon={faFileLines}
                    />
                    Description
                  </h3>
                  <p>{taskData.description}</p>
                </div>
              </div>
              <div className={classes.taskRes}>
                <div className={classes.title}>
                  <h3>Task Response</h3>
                </div>

                <form onSubmit={addResponse}>
                  <div>
                    {/* <label htmlFor='description'>
                      <span>
                        <FontAwesomeIcon
                          onClick={props.openAddTaskModal}
                          className={classes.icone}
                          icon={faFileLines}
                        />
                      </span>{' '}
                      Title
                    </label> */}
                    <h3>{taskData.task_response.title}</h3>
                  </div>
                  <div className={classes.taskResDes}>
                    <label htmlFor='description'>
                      <span>
                        <FontAwesomeIcon
                          onClick={props.openAddTaskModal}
                          className={classes.icone}
                          icon={faFileLines}
                        />
                      </span>{' '}
                      Description
                    </label>
                    <b autoFocus id='description'>
                      {taskData.task_response.description}
                    </b>
                  </div>
                  <div className={classes.bottomn}>
                    <div
                      style={{ flexDirection: 'row' }}
                      className={classes.taskResFile}
                    >
                      <label htmlFor='file'>
                        <span>
                          <FontAwesomeIcon
                            onClick={props.openAddTaskModal}
                            className={classes.icone}
                            icon={faPaperclip}
                          />
                        </span>{' '}
                        Attachment
                      </label>
                      {/* <input value={taskData.file} type='file' /> */}
                      <a
                        className={classes.dowBtn}
                        href={taskData.task_response.file}
                      >
                        Download
                        <FontAwesomeIcon
                          // className={classes.icone}
                          icon={faCircleDown}
                        />
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.rightContaner}>
              <ToastContainer />
              {/* <div className={classes.tasksList}>
              <h3>Task</h3>
              <select name='cars' id='cars'>
                <option value='volvo'>Create a taple to graed 4</option>
                <option value='saab'>Saab</option>
                <option value='mercedes'>Mercedes</option>
                <option value='audi'>Audi</option>
              </select>
            </div> */}
              <div onSubmit={editTask} className={classes.attributes}>
                <div className={classes.header}>
                  <h3>Attributes</h3>
                  <FontAwesomeIcon
                    onClick={props.openAddTaskModal}
                    // className={classes.icone}
                    icon={faDiagramNext}
                  />
                </div>
                <div className={classes.item}>
                  <label htmlFor='status'>Status</label>
                  {taskData.status ? (
                    <>
                      <h2
                        style={{
                          color: ' var(--color1)',
                          backgroundColor: 'var(--color11)',
                        }}
                      >
                        Done
                      </h2>
                    </>
                  ) : (
                    <>
                      <h2>Open</h2>
                    </>
                  )}
                </div>
                <div className={classes.item}>
                  <label htmlFor='date'>Due Date</label>
                  <input
                    id='date'
                    value={taskData.deadline}
                    type='Date'
                    // onChange={e => {
                    //   setBtnEdit(true);
                    // }}
                  />
                </div>
                <div className={classes.item}>
                  <label htmlFor=''>Attachment </label>
                  {/* <input value={taskData.file} type='file' /> */}
                  <a className={classes.dowBtn} href={taskData.file} download>
                    Download
                    <FontAwesomeIcon
                      onClick={props.openAddTaskModal}
                      // className={classes.icone}
                      icon={faCircleDown}
                    />
                  </a>
                </div>
                <div>
                  <div className={classes.item}>
                    <label htmlFor=''>Sender</label>
                    <div className={classes.name}>
                      <UserLogo role={taskData.staff.role} />
                      <h3>{taskData.staff.user}</h3>
                    </div>
                  </div>
                  <div className={classes.item}>
                    <label htmlFor=''>Receiver</label>
                    <div className={classes.name}>
                      <UserLogo role={taskData.receivers.role} />
                      <h3>{taskData.receivers.user}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={classes.contaner}>
      {isLoading ? <h1>loading</h1> : taskResWindowTaskSendet()}
    </div>
  );
};

export default TaskDetailsTest;
