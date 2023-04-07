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
const Login = props => {
  //check if email is right
  const [rightEmail, updateRightEmail] = useState('false');
  const emailValid = event => {
    setTimeout(() => {
      if (
        event.target.value.includes('@') &&
        event.target.value.includes('.com')
      ) {
        updateRightEmail(true);
      } else {
        updateRightEmail(false);
      }
    }, 5000);
  };

  //check if passwword is right
  const [rightPassword, updateRightPassword] = useState('false');
  const passwordValid = event => {
    setTimeout(() => {
      if (event.target.value.length >= 6) {
        updateRightPassword(true);
      } else {
        updateRightPassword(false);
      }
    }, 3000);
  };

  const submitForm = event => {
    fetchlogin(event.target[0].value, event.target[1].value);
   
  };
  return (
    <div className={classes.contaner}>
      <div className={classes.left}>
        <img src={leftImg} alt='' />
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
                <input type='text' id='email' required onChange={emailValid} />
                <label for='email' style={{}}>
                  <FontAwesomeIcon icon={faEnvelope} /> Email
                </label>
                <div className={classes.errorMessage}>
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
                </div>
              </div>

              <div className={classes.fild}>
                <input
                  type='password'
                  id='password'
                  required
                  onChange={passwordValid}
                />
                <label for='password'>
                  <FontAwesomeIcon
                    icon={faLock}
                    className={classes.iconeAnimate}
                  />{' '}
                  Password
                </label>
                <div className={classes.errorMessage}>
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
                </div>
              </div>

              <Btn title='Login' type='submit' class={style.btnOut}></Btn>
            </form>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <img src={rightImg} alt='' />
        <div className={classes.rightContaner}>
          <div className={classes.title}>
            <h2>Work faster</h2>
            <h1>So you can do more</h1>
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
