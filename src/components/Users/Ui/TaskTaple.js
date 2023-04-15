import { useState, useEffect } from 'react';
import classes from './TaskTaple.module.css';
import UserLogo from './UserLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faEye,
  faClock,
  faFileAlt,
  faTriangleExclamation,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

import { getTasksFilltred, searchTasks } from '../Events/getMainData';
import AddTask from './AddTask';
import { NavLink, useNavigate } from 'react-router-dom';
const TaskTaple = props => {
  //user defined data
  const [userData, updateDate] = useState(props.userData);

  //toggle state change on user role change
  const [toggleState, updateToggleState] = useState({
    //
    taskRole: [
      {
        // name of the toggle
        name: 'Assigned',
        // task order of the toggle
        taskOrder: '/sent-tasks',
        updateTaskOrderf: function (event) {
          // update the state with the new task order of role
          updateTaskOrder('/sent-tasks');
          document
            // change he hover style when btn is clicked
            .getElementById('Assigned')
            .classList.remove(`${classes.toggleActive}`);
          document
            .getElementById('Received')
            .classList.remove(`${classes.toggleActive}`);
          document
            .getElementById('Assigned')
            .classList.add(`${classes.toggleActive}`);
        },
      },
      {
        name: 'Received',
        taskOrder: '/received-tasks',
        updateTaskOrderf: function (event) {
          updateTaskOrder('/received-tasks');
          document
            .getElementById('Assigned')
            .classList.remove(`${classes.toggleActive}`);
          document
            .getElementById('Received')
            .classList.remove(`${classes.toggleActive}`);
          document
            .getElementById('Received')
            .classList.add(`${classes.toggleActive}`);
        },
      },
    ],
  });

  // toggle state change on user role change
  const [buttonToggle, updatebuttonToggle] = useState(
    toggleState.taskRole[0].name
  );

  // state to store tasks
  const [tasks, updateTasks] = useState([]);

  // change taskOrder on user role change
  const [taskOrder, updateTaskOrder] = useState(
    toggleState.taskRole[0].taskOrder
  );
  const [taskStatus, updateTaskStatus] = useState(false);
  // change task status on click on open or done btn and change the style of the btn
  const changeTaskStatus = event => {
    updateTaskStatus(!taskStatus);
    document.getElementById('open').classList.remove(`${classes.toggleActive}`);
    document.getElementById('done').classList.remove(`${classes.toggleActive}`);
    document
      .getElementById(event.target.id)
      .classList.add(`${classes.toggleActive}`);
  };

  // useeffect to change when compnat is rendered cahanege the toggle state
  // get tasks on user role change and on task status change
  useEffect(() => {
    if (userData.role === 'dean') {
      updateToggleState({
        taskRole: [
          {
            name: 'Assigned',
            taskOrder: '/sent-tasks',
            updateTaskOrderf: function (event) {
              updateTaskOrder('/sent-tasks');
              document
                .getElementById('Assigned')
                .classList.remove(`${classes.toggleActive}`);
              document
                .getElementById('Received')
                .classList.remove(`${classes.toggleActive}`);
              document
                .getElementById('Assigned')
                .classList.add(`${classes.toggleActive}`);
            },
          },
        ],
      });
    } else if (userData.role === 'vice' || userData.role === 'head') {
      updateToggleState({
        taskRole: [
          {
            name: 'Assigned',
            taskOrder: '/sent-tasks',
            updateTaskOrderf: function (event) {
              updateTaskOrder('/sent-tasks');
              document
                .getElementById('Assigned')
                .classList.remove(`${classes.toggleActive}`);
              document
                .getElementById('Received')
                .classList.remove(`${classes.toggleActive}`);
              document
                .getElementById('Assigned')
                .classList.add(`${classes.toggleActive}`);
            },
          },
          {
            name: 'Received',
            taskOrder: '/received-tasks',
            updateTaskOrderf: function (event) {
              updateTaskOrder('/received-tasks');
              document
                .getElementById('Assigned')
                .classList.remove(`${classes.toggleActive}`);
              document
                .getElementById('Received')
                .classList.remove(`${classes.toggleActive}`);
              document
                .getElementById('Received')
                .classList.add(`${classes.toggleActive}`);
            },
          },
        ],
      });
    } else if (userData.role === 'dr' || userData.role === 'ta') {
      updateToggleState({
        taskRole: [
          {
            name: 'Received',
            taskOrder: '/received-tasks',
            updateTaskOrderf: function (event) {
              updateTaskOrder('/received-tasks');
              document
                .getElementById('Assigned')
                .classList.remove(`${classes.toggleActive}`);
              document
                .getElementById('Received')
                .classList.remove(`${classes.toggleActive}`);
              document
                .getElementById('Received')
                .classList.add(`${classes.toggleActive}`);
            },
          },
        ],
      });
    }
    // remove serach value on use and toggle
    if (document.getElementById('search')) {
      document.getElementById('search').value = '';
    }

    getTasksFilltred(taskOrder, taskStatus).then(data => {
      updateTasks(data.results);
    });
  }, [taskOrder, taskStatus]);

  //calculate time remaining to task
  const calculateTimeRemaining = date1 => {
    const date = new Date(date1);
    const timeDiff = Math.abs(new Date().getTime() - date);
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diffDays === 0) {
      return 'Today';
    } else if (diffDays === 1) {
      return 'Tomorrow';
    } else if (diffDays > 30) {
      return 'More than a month';
    } else if (date < new Date().getTime()) {
      return 'Expired';
    }
    return diffDays + ' days';
  };

  // search for task by title
  // state to determine if search view is open or not (0/1)
  const [searchView, updateSearchView] = useState(props.searchView);
  const searchTask = event => {
    const searchValue = event.target.value;
    searchTasks(taskOrder, searchValue, taskStatus).then(data => {
      updateTasks(data.results);
    });
  };

  // open task details window on click on task
  const navigate = useNavigate();
  const openTaskWindow = event => {
    event.preventDefault();
    navigate('/TaskDetails', {
      state: { taskOrder: `${taskOrder}`, taskId: `${event.currentTarget.id}` },
    });
  };

  return (
    <div className={classes.contaner}>
      <div className={classes.haeder}>
        <div className={`${classes.haederItem} ${classes.title} `}>
          <FontAwesomeIcon className={classes.iconeTitle} icon={faFileAlt} />
          Tasks
        </div>
        <div className={`${classes.haederItem}  `}>
          <div className={` ${classes.toggles} `}>
            <div className={`${classes.taskRoleToggle} ${classes.toggle} `}>
              {toggleState.taskRole.map((item, index) => {
                return (
                  <button
                    id={item.name}
                    key={index}
                    className={`${classes.but} ${
                      index === 0 ? classes.toggleActive : ''
                    } `}
                    onClick={item.updateTaskOrderf}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
            <div className={classes.line}></div>
            <div className={`${classes.taskStatusToggle} ${classes.toggle} `}>
              <button
                onClick={changeTaskStatus}
                id={'done'}
                className={`${classes.but} `}
              >
                Done
              </button>
              <button
                on
                onClick={changeTaskStatus}
                id={'open'}
                className={`${classes.but} ${classes.toggleActive}  `}
              >
                Open
              </button>
            </div>
          </div>
          <div className={classes.btnAddTask}>
            <NavLink to='/addTask'>Add Task</NavLink>
          </div>
          {/* // *! tdodo: search style  */}
          {searchView === 1 ? (
            <div className={classes.search}>
              <input
                id='search'
                className={classes.searchInput}
                type='text'
                placeholder='Search'
                onChange={searchTask}
              />
              <FontAwesomeIcon className={classes.searchIcon} icon={faSearch} />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className={classes.taple}>
        <div className={classes.tapleHeaderContaner}>
          <div
            style={
              taskStatus === true
                ? { gridTemplateColumns: '2fr 1fr 1fr' }
                : { gridTemplateColumns: '2fr 1fr 1fr 1fr' }
            }
            className={classes.tapleHeader}
          >
            <div className={classes.tapleHeaderItem}>Title</div>
            <div className={classes.tapleHeaderItem}>
              {taskOrder === '/sent-tasks' ? ' Resever' : 'Sender'}
            </div>
            <div className={classes.tapleHeaderItem}>Deadline</div>
            {taskStatus === true ? null : (
              <div className={classes.tapleHeaderItem}>Time Remaining</div>
            )}
          </div>
        </div>
        <div className={classes.tapleBodyContaner}>
          {tasks.length === 0 ? (
            <h1 className={classes.emptyTasks}>
              Sorry no tasks available
              <FontAwesomeIcon
                className={classes.iconeError}
                icon={faTriangleExclamation}
              />
            </h1>
          ) : (
            tasks.map(taskfiller => (
              <div
                id={taskfiller.id}
                onClick={openTaskWindow}
                key={taskfiller.id}
                className={classes.tapleBodyItemContaner}
              >
                <div
                  style={
                    taskfiller.status === true
                      ? { gridTemplateColumns: '2fr 1fr 1fr' }
                      : { gridTemplateColumns: '2fr 1fr 1fr 1fr' }
                  }
                  key={taskfiller.id}
                  className={classes.tapleBodyItem}
                >
                  <div className={classes.item}>{taskfiller.title}</div>
                  <div className={classes.item}>
                    <UserLogo
                      role={
                        taskOrder === '/sent-tasks'
                          ? taskfiller.receivers.role
                          : taskfiller.staff.role
                      }
                    ></UserLogo>
                    {taskfiller.receivers.user}
                  </div>
                  <div className={classes.item}>
                    {' '}
                    <FontAwesomeIcon
                      className={classes.iconeDeadline}
                      icon={faClock}
                    />{' '}
                    {taskfiller.deadline}
                  </div>
                  {
                    // if task status is open show time remaining
                    taskfiller.status === true ? null : (
                      <div className={classes.item}>
                        {calculateTimeRemaining(taskfiller.deadline)}
                      </div>
                    )
                  }
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskTaple;
