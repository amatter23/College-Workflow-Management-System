// creat react component

import React, { useState } from 'react';
import classes from './ActionCard.module.css';
import AddTask from './AddTask';
import { NavLink, useNavigate } from 'react-router-dom';
import Actions from '../Pages/Actions';
const ActionCard = props => {
  const navigate = useNavigate();
  //! collor handling
  const actions = [
    {
      name: 'Task',
      title: 'Add new Task',
      btn: 'Add Now',
      color: 1,
      fun: () => {
        navigate('/addTask', {});
      },
    },
    {
      name: 'Vacation',
      title: 'Add new Vacation',
      btn: 'Add Now',
      color: 2,
      fun: () => {
        navigate('/vacations', {});
      },
    },
    {
      name: 'Vacation',
      title: 'Accept or refuse Vacations',
      btn: 'Take a action',
      color: 3,
      fun: () => {
        navigate('/vacations', {});
      },
    },
    {
      name: 'Task',
      title: 'Add new response',
      btn: 'Add',
      color: 4,
      fun: function () {
        navigate('/Actions', {
          state: { action: 'addResponse' },
        });
      },
    },
    {
      name: 'Task',
      title: 'Edit task',
      btn: 'Edit',
      color: 1,
      fun: function () {
        navigate('/Actions', {
          state: { action: 'editTask' },
        });
      },
    },
    {
      name: 'Task',
      title: 'Delete task',
      btn: 'Delete',
      color: 2,
      fun: () => {
        navigate('/Actions', {
          state: { action: 'deleteTask' },
        });
      },
    },
  ];
  const [color, setColor] = useState(`var(--color${actions[props.ac].color})`);
  const [color1, setColor1] = useState(
    `var(--color1${actions[props.ac].color})`
  );
  const [backgroundColor, setBackgroundColor] = useState(
    `var(--color${actions[props.ac].color})`
  );
  const [btnColor, setbtnColor] = useState(`var(--text_color_2`);
  //CHANGE THE COLOR OF THE CARD WHEN THE MOUSE IS OVER THE CARD
  const hoverColor = () => {
    setColor('var(--text_color_3)');
    setColor1(`var(--color2${actions[props.ac].color})`);
    setbtnColor('var(--text_color_3)');
  };
  const normalColor = () => {
    setColor(`var(--color${actions[props.ac].color})`);
    setColor1(`var(--color1${actions[props.ac].color})`);
    setbtnColor('var(--text_color_2)');
  };
  //* done

  return (
    <div
      className={classes.actionCard}
      onMouseMove={hoverColor}
      onMouseOut={normalColor}
    >
      <div className={`${classes.item} ${classes.first}`}>
        <h1 style={{ color: color, backgroundColor: color1 }}>
          {actions[props.ac].name}
        </h1>
      </div>
      <div className={`${classes.item} ${classes.Second}`}>
        <h1>{actions[props.ac].title}</h1>
      </div>
      <div className={`${classes.item} ${classes.third}`}>
        <button onClick={actions[props.ac].fun} style={{ color: btnColor }}>
          {actions[props.ac].btn}
        </button>
      </div>
      <div
        style={{ backgroundColor: backgroundColor }}
        className={classes.back}
      ></div>
    </div>
  );
};
export default ActionCard;

// ----------------------------------------------------------------
// add task (dean / head/ vice)
// add vecations (doctor / assistant)
// accsept or refuse vecations (dean / head/ vice)
// submit task ( head/ vice/ doctor / assistant)
// edit task  (dean / head/ vice)
// delete task (dean / head/ vice)
