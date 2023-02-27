//need to figrout how can be creat a denamic icon
import React, { useState } from 'react';
import classes from './vacationsHome.module.css';
import LogoUser from '../../Ui/LogoUser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faFile,
  faList,
  faReceipt,
  faTrash,
  faD,
  faH,
  faClock,
  faLayerGroup,
  faCircle,
  faCircleCheck,
  faCircleMinus,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import Delete from '../../Ui/Delete.js';
import { render } from '@testing-library/react';

const VacationsHome = props => {
  const clickHandler = () => {};
  const deleteItem = id => {
    updateData(current => current.filter(tasks => tasks.id !== id));
  };
  const [data, updateData] = useState(props.data);
  const [status, updateStatus] = useState([
    <FontAwesomeIcon
      icon={faCircleCheck}
      className={`${classes.Icone} ${classes.accepted}`}
    />,
    <FontAwesomeIcon
      icon={faCircleMinus}
      className={`${classes.Icone} ${classes.reject}`}
    />,
    <FontAwesomeIcon
      icon={faSpinner}
      className={`${classes.Icone} ${classes.pending}`}
    />,
  ]);

  return (
    <div className={classes.tasks}>
      <div className={classes.header}>
        <div className={classes.title}>
          {props.tapleIcone}
          <h3>{props.tapleName}</h3>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faList}
            className={classes.titleIcone}
            onClick={clickHandler}
          />
        </div>
      </div>
      <div className={classes.tapleOfData}>
        <div className={`${classes.rows} ${classes.first}`}>
          <div className={classes.item}>
            <FontAwesomeIcon
              icon={faArrowRight}
              className={classes.titleIcone}
            />
            <h4>Sender</h4>
          </div>
          <div className={classes.item}>
            <FontAwesomeIcon
              icon={faLayerGroup}
              className={classes.titleIcone}
            />
            <h4>Type</h4>
          </div>
          <div className={classes.item}>
            <FontAwesomeIcon icon={faCircle} className={classes.titleIcone} />
            <h4>States</h4>
          </div>
          <div className={classes.item}>
            <FontAwesomeIcon icon={faTrash} className={classes.titleIcone} />
            <h4>Dealete</h4>
          </div>
        </div>
        {data.length === 0 ? (
          <div className={classes.errorM}>No Data to Show</div>
        ) : (
          data.map(vec => (
            <div className={`${classes.rows} ${classes.columnContant} `}>
              <div
                className={`${classes.item} ${classes.sen_res} ${classes.rowsx2}`}
              >
                <LogoUser curentRole={vec.sender.role}></LogoUser>
                <h4>{vec.sender.name}</h4>
              </div>
              <div
                className={`${classes.item} ${classes.sen_res} ${classes.rowsx2}`}
              >
                <h4>{vec.type}</h4>
              </div>
              <div
                className={`${classes.item} ${classes.sen_res} ${classes.rowsx2}`}
              >
                {vec.status === 'accepted' ? status[0] : ''}
                {vec.status === 'reject' ? status[1] : ''}
                {vec.status === 'pending' ? status[2] : ''}
              </div>
              <div
                className={`${classes.item} ${classes.sen_res} ${classes.rowsx2}`}
              >
                <Delete id={vec.id} deleteItem={deleteItem}></Delete>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VacationsHome;
