import { useState, useEffect, useRef } from 'react';
import classes from './HeightLevelVecationTaple.module.css';
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
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

import { getVacations, acceptOrRefuseVacation } from '../Events/getMainData';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HeightLevelVecationTaple = props => {
  //user defined data
  const [userData, updateDate] = useState(props.userData);

  // handel error loading
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // state to store tasks
  const [vacations, updateVacations] = useState([]);

  const vacationAction = async (id, action, event) => {
    console.log(id, action);
    try {
      const response = await acceptOrRefuseVacation(id, action).then(data => {
        if (data === true) {
          toast.success('Action was successful');
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          toast.error('Try again later');
        }
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
      setError(true);
      setIsLoading(false);
    }
  };

  //fetch data from api
  const fetchData = async () => {
    try {
      const response = await getVacations().then(data => {
        updateVacations(data);

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
      </div>
      <div className={classes.taple}>
        <div className={classes.tapleContent}>
          <div className={classes.tapleHeaderContaner}>
            <div
              style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr 0.5fr 0.5fr' }}
              className={classes.tapleHeader}
            >
              <div className={classes.tapleHeaderItem}>Type</div>
              <div className={classes.tapleHeaderItem}>Duration</div>
              <div className={classes.tapleHeaderItem}>start Date</div>
              <div className={classes.tapleHeaderItem}>sender</div>
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
              vacations.map(vacation =>
                vacation.status === 'Pending' &&
                vacation[userData.role + '_approved'] !== true
                  ? (console.log(vacation),
                    (
                      <div
                        id={vacation.id}
                        // onClick={openTaskWindow}
                        key={vacation.id}
                        className={classes.tapleBodyItemContaner}
                        onClick={() => {
                          document.getElementById('test').click();
                        }}
                      >
                        <div
                          style={{
                            gridTemplateColumns: '1fr 1fr 1fr 1fr 0.5fr 0.5fr',
                          }}
                          key={vacation.id}
                          className={classes.tapleBodyItem}
                        >
                          <div className={classes.item}>
                            {vacation.leave_type}
                          </div>
                          {/*to do : add duration*/}
                          <div className={classes.item}>
                            {' '}
                            {vacation.num_days} Days
                          </div>
                          <div className={classes.item}>
                            {' '}
                            <FontAwesomeIcon
                              className={classes.iconeDeadline}
                              icon={faClock}
                            />{' '}
                            {vacation.start_date}
                          </div>
                          <div className={classes.item}>
                            <UserLogo role={vacation.sender_role}></UserLogo>{' '}
                            {vacation.sender_name}
                          </div>
                          <div
                            onClick={() => {
                              vacationAction(vacation.id, 'Accepted');
                            }}
                            className={classes.item}
                          >
                            <FontAwesomeIcon
                              className={classes.iconaccept}
                              icon={faCircleCheck}
                            />
                          </div>
                          <div
                            onClick={() => {
                              vacationAction(vacation.id, 'Refused');
                            }}
                            className={classes.item}
                          >
                            <FontAwesomeIcon
                              icon={faCircleXmark}
                              className={classes.iconrefuse}
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  : ''
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeightLevelVecationTaple;
