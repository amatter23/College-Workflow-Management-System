import { useState, useEffect, useRef } from 'react';
import classes from './LowLevelVacationsTaple.module.css';
import UserLogo from './UserLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faEyee,
  faClock,
  faFileAlt,
  faTriangleExclamation,
  faSearch,
  faForward,
  faBackward,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons';

import { getVacationsApply, addNewVacation } from '../Events/getMainData';
import { NavLink, useNavigate } from 'react-router-dom';
import React from 'react';
import Select from 'react-select';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LowLevelVacationsTaple = props => {
  //user defined data
  const [userData, updateDate] = useState(props.userData);

  // handel error loading
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // state to store tasks
  const [vacations, updateVacations] = useState([]);

  // task status state
  const [VacationStatus, updateVacationStatus] = useState('Pending');
  // change task status on click on open or done btn and change the style of the btn
  const changeVacationStatus = event => {
    if (event.target.id === 'Pending') {
      updateVacationStatus('Pending');
    } else if (event.target.id === 'Accepted') {
      updateVacationStatus('Accepted');
    } else if (event.target.id === 'Refused') {
      updateVacationStatus('Refused');
    }
    document
      .getElementById('Pending')
      .classList.remove(`${classes.toggleActive}`);
    document
      .getElementById('Accepted')
      .classList.remove(`${classes.toggleActive}`);
    document
      .getElementById('Refused')
      .classList.remove(`${classes.toggleActive}`);
    document
      .getElementById(event.target.id)
      .classList.add(`${classes.toggleActive}`);
  };
  const [test, updateTest] = useState(true);

  //fetch data from api
  const fetchData = async () => {
    try {
      const response = await getVacationsApply().then(data => {
        updateVacations(data);
        console.log(data);
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const [addTaskView, updateAddTaskView] = useState(props.addTaskView);
  // open task details window on click on task
  const navigate = useNavigate();
  const openVacationWindow = vacations => {
    console.log(vacations);

    navigate('/VacationPage', {
      state: { vacation: vacations },
    });
  };

  const options = [
    { value: 'Ordinary', label: 'Ordinary' },
    { value: 'Casual', label: 'Casual' },
    { value: 'Sick', label: 'Sick' },
    { value: 'Unpaid', label: 'Unpaid' },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const addNewVacations = async event => {
    event.preventDefault();
    console.log(
      selectedOption.value,
      event.target.startDate.value,
      event.target.endDate.value
    );
    try {
      const response = await addNewVacation(
        event.target.startDate.value,
        event.target.endDate.value,
        selectedOption.value
      ).then(data => {
        if (data === true) {
          window.location.reload();
        } else {
          toast.error('Check your dates');
        }
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
      setError(true);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div>
        <div>
          <h3 style={{ textAlign: 'center' }}>Loading</h3>
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <div>
          <h3 style={{ textAlign: 'center' }}>
            Failed to load your tasks.... please try again
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.contaner}>
      <div className={classes.haeder}>
        <div className={`${classes.haederItem} ${classes.title} `}>
          <FontAwesomeIcon
            style={{
              color: 'var(--color3)',
              backgroundColor: 'var(--color13)',
            }}
            className={classes.iconeTitle}
            icon={faNewspaper}
          />
          Vacations
        </div>
        <div className={`${classes.haederItem}  `}>
          <div className={` ${classes.toggles} `}>
            <div className={`${classes.taskStatusToggle} ${classes.toggle} `}>
              <button
                on
                onClick={changeVacationStatus}
                id={'Accepted'}
                className={`${classes.but}`}
              >
                Accepted
              </button>
              <button
                onClick={changeVacationStatus}
                id={'Pending'}
                className={`${classes.but}  ${classes.toggleActive} `}
              >
                Pending
              </button>

              <button
                on
                onClick={changeVacationStatus}
                id={'Refused'}
                className={`${classes.but} `}
              >
                Rejected
              </button>
            </div>
          </div>

          <div
            // style={{ display: addTaskView ? 'flex' : 'none' }}
            className={classes.btnAddTask}
          >
            <Popup
              trigger={<button>New Vacation</button>}
              position='right center'
              modal
            >
              <div className={classes.newVacation}>
                <h1>New Vacation</h1>
                <form
                  onSubmit={event => {
                    event.preventDefault();
                    addNewVacations(event);
                  }}
                  className={classes.data}
                >
                  <div className={classes.content}>
                    <div
                      className={classes.input}
                      style={{ color: 'var(--color1)' }}
                    >
                      <label htmlFor=''>Vacation type </label>
                      <Select
                        value={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    </div>
                    <div
                      className={classes.input}
                      style={{ color: 'var(--color2)' }}
                    >
                      <label htmlFor=''>Start date </label>
                      <input type='date' name='' id='startDate' />
                    </div>
                    <div
                      className={classes.input}
                      style={{ color: 'var(--color3)' }}
                    >
                      <label htmlFor=''>End Date </label>
                      <input type='date' name='' id='endDate' />
                    </div>
                  </div>

                  <button
                    style={{ width: '50%' }}
                    className={classes.btnAddTask}
                    type='submit'
                  >
                    Create
                  </button>
                </form>
              </div>
            </Popup>
          </div>
        </div>
      </div>
      <div className={classes.taple}>
        <div className={classes.tapleContent}>
          <div className={classes.tapleHeaderContaner}>
            <div
              style={{ gridTemplateColumns: '1fr 1fr 1fr' }}
              className={classes.tapleHeader}
            >
              <div className={classes.tapleHeaderItem}>Type</div>
              <div className={classes.tapleHeaderItem}>Duration</div>
              <div className={classes.tapleHeaderItem}>start Date</div>
            </div>
          </div>
          <div className={classes.tapleBodyContaner}>
            {vacations.length === 0 ? (
              <h1 className={classes.emptyTasks}>
                Sorry no tasks available
                <FontAwesomeIcon
                  className={classes.iconeError}
                  icon={faTriangleExclamation}
                />
              </h1>
            ) : (
              vacations
                .filter(vacation =>
                  vacation.status.includes(`${VacationStatus}`)
                )
                .map(vacation => (
                  <div
                    id={vacation.id}
                    onClick={
                      vacation.status === 'Accepted'
                        ? () => openVacationWindow(vacation)
                        : null
                    }
                    key={vacation.id}
                    className={classes.tapleBodyItemContaner}
                  >
                    <div
                      style={{ gridTemplateColumns: '1fr 1fr 1fr' }}
                      key={vacation.id}
                      className={classes.tapleBodyItem}
                    >
                      <div className={classes.item}>{vacation.leave_type}</div>
                      {/*to do : add duration*/}
                      <div className={classes.item}>
                        {vacation.num_days} Days
                      </div>
                      <div className={classes.item}>{vacation.start_date} </div>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowLevelVacationsTaple;
