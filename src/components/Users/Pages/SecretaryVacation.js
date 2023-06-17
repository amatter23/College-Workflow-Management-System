import React, { useState, useEffect } from 'react';
import classes from './SecretaryVacation.module.css';
import UserLogo from '../../Users/Ui/UserLogo';

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
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';

import { getVacationsApply, SecretaryVacations } from '../Events/getMainData';

const SecretaryVacation = props => {
  // handel error loading
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [vacationLoading, setVacationLoading] = useState(false);

  // state to store tasks
  const [vacations, updateVacations] = useState([]);

  const fetchData = async () => {
    try {
      setVacationLoading(true);
      const response = await SecretaryVacations().then(data => {
        updateVacations(data);
        setVacationLoading(false);
      });
    } catch (error) {
      console.log(error);
      setError(true);
      setVacationLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  const openVacationWindow = vacations => {
    console.log(vacations);

    navigate('/VacationPage', {
      state: { vacation: vacations },
    });
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
    <div className={classes.con}>
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
                <button on id={'Accepted'} className={`${classes.but}`}>
                  Accepted
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.taple}>
          <div className={classes.tapleContent}>
            <div className={classes.tapleHeaderContaner}>
              <div
                style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr' }}
                className={classes.tapleHeader}
              >
                <div className={classes.tapleHeaderItem}>Type</div>
                <div className={classes.tapleHeaderItem}>Duration</div>
                <div className={classes.tapleHeaderItem}>Sender</div>
                <div className={classes.tapleHeaderItem}>start Date</div>
              </div>
            </div>
            <div className={classes.tapleBodyContaner}>
              {vacationLoading ? (
                <h1 className={classes.emptyTasks}>
                  <FontAwesomeIcon
                    className={classes.iconeLoading}
                    icon={faSpinner}
                  />
                  loading{' '}
                </h1>
              ) : (
                vacations.map(vacation => (
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
                      style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr' }}
                      key={vacation.id}
                      className={classes.tapleBodyItem}
                    >
                      <div className={classes.item}>{vacation.leave_type}</div>
                      {/*to do : add duration*/}
                      <div className={classes.item}>
                        {vacation.num_days} Days
                      </div>
                      <div className={classes.item}>
                        <UserLogo role={vacation.sender_role} />
                        {vacation.sender_name}</div>
                      <div className={classes.item}>{vacation.start_date} </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretaryVacation;
