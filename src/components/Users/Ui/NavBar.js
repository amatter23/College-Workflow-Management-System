// *! create a vaaction route

import React from 'react';
import classes from './NavBar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faEye,
  faClock,
  faFileAlt,
  faBriefcase,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import UserLogo from './UserLogo';
import { checkAuth, loginPageRedirect, logout } from '../Events/auth';

const NavBar = props => {
  const logoutBut = () => {
    logout();
  };

  console.log(props.userData);
  const test = '01';
  if (props.userData.staff === undefined) {
    return (
      <div className={classes.contaner}>
        <div className={classes.nav}>
          <div className={classes.left}>
            <div className={classes.home}>
              <FontAwesomeIcon
                icon={faBriefcase}
                className={`${classes.icon}`}
              />
              <div className={classes.title}>
                <h1>Work Flow</h1>
                <h1 className={classes.h1D}>Management</h1>
              </div>
            </div>
            <div className={classes.list}>
              <ul>
                <li>
                  <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive ? classes.active : null
                    }
                    end
                  >
                    Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/tasks'
                    className={({ isActive }) =>
                      isActive ? classes.active : null
                    }
                  >
                    Tasks
                  </NavLink>
                </li>
                {/* <li>Vacations</li> */}
              </ul>
            </div>
          </div>
          <div className={classes.right}>
            {localStorage.getItem('token') ? (
              <>
                {/* <div className={classes.name}>
                  <UserLogo role={props.userData.role} />
                  <div>
                    <h1>
                      {`${props.userData.full_name}`.charAt(0).toUpperCase() +
                        `${props.userData.full_name}`.slice(1)}
                    </h1>
                    <h2>
                      {`${props.userData.role}`.charAt(0).toUpperCase() +
                        `${props.userData.role}`.slice(1)}
                    </h2>
                  </div>
                </div> */}
                <FontAwesomeIcon
                  onClick={logoutBut}
                  icon={faArrowRightFromBracket}
                  className={`${classes.icon}`}
                />
              </>
            ) : null}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.contaner}>
        <div className={classes.nav}>
          <div className={classes.left}>
            <div className={classes.home}>
              <FontAwesomeIcon
                icon={faBriefcase}
                className={`${classes.icon}`}
              />
              <div className={classes.title}>
                <h1>Work Flow</h1>
                <h1 className={classes.h1D}>Management</h1>
              </div>
            </div>
            <div className={classes.list}>
              <ul>
                <li>
                  <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive ? classes.active : null
                    }
                    end
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/tasks'
                    className={({ isActive }) =>
                      isActive ? classes.active : null
                    }
                  >
                    Tasks
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/vacations'
                    className={({ isActive }) =>
                      isActive ? classes.active : null
                    }
                  >
                    Vacations
                  </NavLink>
                </li>
                {/* <li>Vacations</li> */}
              </ul>
            </div>
          </div>
          <div className={classes.right}>
            {localStorage.getItem('token') ? (
              <>
                <div className={classes.name}>
                  <UserLogo role={props.userData.role} />
                  <div>
                    <h1>
                      {`${props.userData.full_name}`.charAt(0).toUpperCase() +
                        `${props.userData.full_name}`.slice(1)}
                    </h1>
                    <h2>
                      {`${props.userData.role}`.charAt(0).toUpperCase() +
                        `${props.userData.role}`.slice(1)}
                    </h2>
                  </div>
                </div>
                <FontAwesomeIcon
                  onClick={logoutBut}
                  icon={faArrowRightFromBracket}
                  className={`${classes.icon}`}
                />
              </>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
};

export default NavBar;
