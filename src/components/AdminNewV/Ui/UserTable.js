import react, { useEffect, useState } from 'react';
import classes from './UserTable.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { getUsers } from '../../Users/Events/getMainData';

const UserTable = props => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    try {
      const response = await getUsers();
      if (response.error === true) {
        console.log('error');
        setError(true);
        setIsLoading(false);
      } else {
        setUsers(response);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className={classes.centered}>
        <h1>Loading...</h1>
      </div>
    );
  } else if (error) {
    return (
      <div className={classes.centered}>
        <h1>Error to get user try again...</h1>
      </div>
    );
  }
  return (
    <div className={classes.MainContaner}>
      <div className={classes.TableContaner}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>User Name</th>
              <th className={classes.deleteBtn}>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr key={'0'}>
              <td>matter</td>
              <td>matter</td>
              <td>matter</td>
              <td>matter</td>
              <td>
                <button
                  className={classes.Btn}
                  // onClick={() => props.editRow(user)}
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr key={'0'}>
              <td>Ahmed Matter</td>
              <td>matterahmed.23@g,ail.com</td>
              <td>matter</td>
              <td>Matter</td>
              <td className={classes.deleteBtn}>
                <button

                // onClick={() => props.editRow(user)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
            <tr key={'0'}>
              <td>matter</td>
              <td>matter</td>
              <td>matter</td>
              <td>matter</td>
              <td>
                <button
                  className={classes.Btn}
                  // onClick={() => props.editRow(user)}
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr key={'0'}>
              <td>matter</td>
              <td>matter</td>
              <td>matter</td>
              <td>matter</td>
              <td>
                <button
                  className={classes.Btn}
                  // onClick={() => props.editRow(user)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
