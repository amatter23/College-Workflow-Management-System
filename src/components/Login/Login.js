import React, { useState } from 'react';
import classes from './login.module.css';
import leftImg from './Assits/bullseye-gradient 1.svg';
import rightImg from './Assits/Group.svg';
import rightImg_bic from './Assits/ai-intelligence 1.svg';
import Btn from '../Ui/Btn';
import style from '../../components/Ui/btn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLock,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { fetchlogin } from '../Users/Events/auth';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = props => {
  //check if email is right

  //check if passwword is right
  const navigate = useNavigate();
  const submitForm = event => {
    event.preventDefault();
    fetchlogin(event.target[0].value, event.target[1].value);
  };
  return (
    <div className={classes.contaner}>
      <div className={classes.left}>
        <div className={classes.leftContaner}>
          <div className={classes.title}>
            <h1>
              <span className={classes.bottomn}>Go to manage your work</span>{' '}
              Welcome Back
            </h1>
          </div>
          <div className={classes.formEmail}>
            <form onSubmit={submitForm}>
              <div className={classes.fild}>
                <input type='text' id='username' required />
                <label for='username' style={{}}>
                  <FontAwesomeIcon icon={faEnvelope} /> User Name
                </label>
                {/* <div className={classes.errorMessage}>
                  {rightEmail ? (
                    ''
                  ) : (
                    <div>
                      <FontAwesomeIcon
                        icon={faTriangleExclamation}
                        className={classes.icone}
                      />
                      Please enter a right email address
                    </div>
                  )}
                </div> */}
              </div>

              <div className={classes.fild}>
                <input type='password' id='password' required />
                <label for='password'>
                  <FontAwesomeIcon
                    icon={faLock}
                    className={classes.iconeAnimate}
                  />
                  Password
                </label>
                {/* <div className={classes.errorMessage}>
                  {rightPassword ? (
                    ''
                  ) : (
                    <div>
                      <FontAwesomeIcon
                        icon={faTriangleExclamation}
                        className={classes.icone}
                      />
                      Please enter a right Password
                    </div>
                  )}
                </div> */}
              </div>

              <button title='Login' type='submit'>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.rightContaner}>
          <div className={classes.title}>
            <h2>Collaborate better, </h2>
            <h1>
              work smarter with{' '}
              <span style={{ color: 'var(--text_color_2)' }}>us.</span>
            </h1>
          </div>
          <div className={classes.img}>
            <img src={rightImg_bic} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
