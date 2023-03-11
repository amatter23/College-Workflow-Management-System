// creat react component
import React, { useState, useEffect } from 'react';
import Contaner from '../../Ui/Contaner';
import style from '../../Ui/contaner.module.css';
import classes from './users.module.css';

import Menu from '../Ui_admin/Menu';
import Nav from '../Ui_admin/Nav';
import Btn from '../../Ui/Btn';
import btnstyle from '../../Ui/btn.module.css';
import LogoUser from '../../Ui/LogoUser';
import UserRow from './UserRow';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressBook,
  faEnvelope,
  faEye,
  faLayerGroup,
  faLock,
  faPlus,
  faSignature,
  faTrash,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
const Users = props => {

  const [addUserStytes, setAddUser] = useState('');
  //close window add user
  const addUserDeactive = () => {
    if (addUserStytes === classes.active) {
      setAddUser(``);
    }
  };
  // open window add user
  const addUserActive = () => {
    setAddUser(classes.active);
  };
  // date come from add user window
  const [newUserData, setnewUserData] = useState({
    id: Math.random() * 10,
    name: '',
    email: '',
    password: '',
    role: '',
    degree: '',
  });
  // assigne the data to the state
  const addUser = event => {
    event.preventDefault();
    setnewUserData({
      id: Math.random() * 10,
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
      role: event.target[3].value,
      degree: event.target[4].value,
    });
  };
  // update the data in home window
  useEffect(() => {
    if (newUserData.name !== '') {
      props.updateDataFa(newUserData);
      addUserDeactive();
    }
  }, [newUserData]);
  //filter by role to view users
  const [role, setRole] = useState('all');
  const filterByRole = event => {
    console.log(event.target.id);
    setRole(event.target.id);
    showPasswordFunc()
  };

  //
  const deleteUser = event => {
    props.deleteUserMain(event.target.id);
  };
  const showPasswordFunc = (showPassword,setShowPassword ) => {
    setShowPassword(!showPassword);
  };
  return (
    <Contaner type={style.contaner_1}>
      <Contaner
        type={style.contaner_2}
        flexDirection={'row'}
        gap={'var(--units)'}
      >
        {/* menu contaner */}
        <Contaner>
          <Menu></Menu>
        </Contaner>
        {/* add user contaner */}
        <div className={`${addUserStytes}  ${classes.addUser} `}>
          <div className={classes.addUser_Contaner}>
            <div className={classes.addUser_Contanertitle}>
              <FontAwesomeIcon icon={faUser} className={classes.titleIcone} />
              <h1>New User</h1>
            </div>
            <div className={classes.addUser_ContanerContent}>
              <form onSubmit={addUser}>
                <div className={classes.inp}>
                  <label for='name'>
                    <FontAwesomeIcon icon={faSignature} /> Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    required
                    placeholder=' Ex "Mohamed Zedan"'
                  />
                </div>
                <div className={classes.inp}>
                  <label for='email' style={{}}>
                    <FontAwesomeIcon icon={faEnvelope} /> Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    required
                    placeholder='example@test.com '
                  />
                </div>
                <div className={classes.inp}>
                  <label for='password' style={{}}>
                    <FontAwesomeIcon
                      icon={faLock}
                      className={classes.iconeAnimate}
                    />{' '}
                    Password
                  </label>
                  <input
                    type='password'
                    id='password'
                    required
                    placeholder='Min 6 characters long'
                  />
                </div>
                <div className={classes.roleDegree}>
                  <div className={classes.item}>
                    <FontAwesomeIcon
                      icon={faAddressBook}
                      className={classes.titleIcone}
                    />
                    <h2>Role</h2>
                    <div className={classes.select}>
                      <select name='format' id='role' required>
                        <option selected disabled>
                          Choose Role
                        </option>
                        {props.data.role.map(roles => {
                          return (
                            <option value={roles.name}>
                              {roles.name.charAt(0).toUpperCase() +
                                roles.name.slice(1)}{' '}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className={classes.item}>
                    <FontAwesomeIcon
                      icon={faLayerGroup}
                      className={classes.titleIcone}
                    />
                    <h2>Dergree</h2>
                    <div className={classes.select}>
                      <select name='format' id='degree'>
                        <option selected disabled>
                          Choose Degree
                        </option>
                        {props.data.degree.map(roles => {
                          return (
                            <option value={roles.name}>
                              {roles.name.charAt(0).toUpperCase() +
                                roles.name.slice(1)}{' '}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <Btn
                  title='Add User'
                  CLASS={classes.btn}
                  type='submit'
                  class={btnstyle.btnOut}
                ></Btn>
              </form>
            </div>
          </div>
        </div>
        {/* content contaner */}
        <Contaner
          type={style.contaner_3}
          flex={'1'}
          backgroundColor={'var( --co1color)'}
          borderRadius='var(--units)'
          flexDirection='Column'
          onClick={addUserDeactive}
        >
          {/* nav contaner */}
          <Nav></Nav>
          {/* content */}
          <div className={classes.content}>
            {/* header */}
            <div className={classes.header}>
              <div className={classes.title}>
                <FontAwesomeIcon
                  icon={faAddressBook}
                  className={classes.titleIcone}
                />
                <h1>Users</h1>
              </div>
              <div className={classes.btns}>
                <Btn
                  title='Add New User'
                  onClick={addUserActive}
                  CLASS={classes.btn}
                  icone=<FontAwesomeIcon
                    icon={faPlus}
                    className={classes.titleIcone}
                  />
                  type='submit'
                  class={btnstyle.btnIn}
                ></Btn>
              </div>
            </div>
            <div className={classes.tapleOfUsers}>
              <div className={classes.filter}>
                <h2
                  className={role === 'all' ? classes.active : ''}
                  onClick={filterByRole}
                  id='all'
                >
                  All
                </h2>
                {props.data.role.map(roles => {
                  return (
                    <h2
                      className={role === roles.name ? classes.active : ''}
                      onClick={filterByRole}
                      id={roles.name}
                    >
                      {roles.name.charAt(0).toUpperCase() + roles.name.slice(1)}
                    </h2>
                  );
                })}
              </div>
              <div className={classes.content}>
                <div className={`${classes.header} ${classes.row}`}>
                  <div className={`${classes.item} ${classes.name}`}>
                    <FontAwesomeIcon
                      icon={faSignature}
                      className={classes.titleIcone}
                    />
                    <h2>Name</h2>
                  </div>
                  <div className={classes.item}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className={classes.titleIcone}
                    />
                    <h2>Email</h2>
                  </div>
                  <div className={classes.item}>
                    <FontAwesomeIcon
                      icon={faLock}
                      className={classes.titleIcone}
                    />
                    <h2>Password</h2>
                  </div>
                  <div className={classes.item}>
                    <FontAwesomeIcon
                      icon={faAddressBook}
                      className={classes.titleIcone}
                    />
                    <h2>Role</h2>
                  </div>
                  <div className={classes.item}>
                    <FontAwesomeIcon
                      icon={faLayerGroup}
                      className={classes.titleIcone}
                    />
                    <h2>Degree</h2>
                  </div>
                </div>
                {role === 'all'
                  ? props.data.users.map(user => {
                      return (
                        <UserRow user={user} deleteUser={deleteUser} showPasswordFunc = {showPasswordFunc}></UserRow>
                      );
                    })
                  : props.data.users
                      .filter(users => users.role.includes(`${role}`))
                      .map(user => {
                        return (
                          <UserRow
                            user={user}
                            deleteUser={deleteUser}
                            showPasswordFunc = {showPasswordFunc}
                          ></UserRow>
                        );
                      })}
              </div>
            </div>
          </div>
        </Contaner>
      </Contaner>
    </Contaner>
  );
};
export default Users;
