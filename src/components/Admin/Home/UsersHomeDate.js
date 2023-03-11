import React, { useState } from 'react';
import classes from './usersHomeData.module.css';
import LogoUser from '../../Ui/LogoUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faD, faList } from '@fortawesome/free-solid-svg-icons';

const UsersHomeData = props => {
  
  const [users, updateusers] = useState(props.users);
  const [roles, uodateRoles] = useState(props.roles);
  const [curentRole, update] = useState(roles[0]);
  const [handler, updatehandler] = useState('translateY(-140%)');

  const clickHandler = () => {
    if (handler === 'translateY(-140%)') {
      updatehandler('translateY(0)');
    } else {
      updatehandler('translateY(-140%)');
    }
  };

  const changeUser = event => {
    update(roles[event.target.id]);
    clickHandler();
  };

  return (
    <div className={classes.contaner}>
      <div className={classes.header}>
        <div className={classes.title}>
        <LogoUser curentRole = {curentRole.name}></LogoUser>
          <h3>{curentRole.name}</h3>
          <button onClick={clickHandler}>
            <FontAwesomeIcon
              icon={faAngleDown}
              className={classes.titleIcone}
            />
          </button>
          <ul className={classes.list} style={{ transform: handler }}>
            {roles.map((role, index) => (
              <li className={classes.role} onClick={changeUser} id={index}>
                <LogoUser curentRole = {role.name}></LogoUser>
                {role.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.btn}>
          <FontAwesomeIcon icon={faList} className={classes.icone} />
        </div>
      </div>
      <div className={classes.userContaner}>
        {users
          .filter(user => user.role.includes(curentRole.name))
          .map(filteredName => (
            <div className={classes.user}>
              <h2>{filteredName.name}</h2>
              <h3>{filteredName.degree}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UsersHomeData;
