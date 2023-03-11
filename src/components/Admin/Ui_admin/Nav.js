import React, { useState, useEffect } from 'react';
import classes from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faA,
  faBell,
  faClock,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import LogoUser from '../../Ui/LogoUser';
const Nav = props => {
  // time data
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  /* need to create a cliek handler for to btn */
  // const cliekHandler = () => {
  // }

  return (
    <div className={classes.contaner}>
      {/* find way to get this data from back */}
      <div className={classes.name}>
        <div className={classes.strock}>
        <LogoUser
          curentRole={'Ahmed'}
        ></LogoUser>
        </div>
        
        <h3>Ahmed Matter</h3>
      </div>
      <div className={classes.navData}>
        <div className={`${classes.clock} ${classes.hover}`}>
          <div className={classes.icone}>
            <FontAwesomeIcon icon={faClock} className={classes.navNameIcone} />
          </div>
          {/* time format need to serch about it */}
          <div className={classes.time}>
            <div>
              {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })}
            </div>
            |
            <div>
              {dateState.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </div>
          </div>
        </div>
        <div className={classes.navBtn}>
          {/* need to create a cliek handler for to btn */}
          <FontAwesomeIcon icon={faBell} className={classes.hover} />
          <FontAwesomeIcon icon={faRightToBracket} className={classes.hover} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
