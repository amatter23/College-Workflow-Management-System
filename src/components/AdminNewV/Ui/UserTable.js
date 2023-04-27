import react, { useEffect, useState } from 'react';
import classes from './UserTable.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { getUsers, deleteUser } from '../../Users/Events/getMainData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UserTable = props => {

  // state for users
  const [users, setUsers] = useState([]);
  //state for loading
  const [isLoading, setIsLoading] = useState(true);
  //state for error
  const [error, setError] = useState(false);
  //state for delete window
  const [deleteWindow, setDeleteWindow] = useState(false);
  //state for delete id
  const [deleteId, setDeleteId] = useState({
    id: null,
    full_name: '',
  });
  //state for delete user
  const handelDeleteUser = async () => {
    try {
      const response = await deleteUser(deleteId);
      if (response.error === true) {
        toast.error('Try again later', {});
        setDeleteWindow(false);
      } else {
        setUsers(response.data);
        toast.success('success');
        setDeleteWindow(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  //state for fetch data
  const fetchData = async () => {
    try {
      const response = await getUsers();
      if (response.error === true) {
        console.log('error');
        setError(true);
        setIsLoading(false);
      } else {
        setUsers(response.data);
        setIsLoading(false);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //state for useEffect
  useEffect(() => {
    fetchData();
  }, []);

  //if loading
  if (isLoading) {
    return (
      <div className={classes.centered}>
        <h1>Loading...</h1>
      </div>
    );
  
  }
  //if error 
  else if (error) {
    return (
      <div className={classes.centered}>
        <h1>Error to get user try again...</h1>
      </div>
    );
  }
  return (
    <div className={classes.MainContaner}>
      <ToastContainer />
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
            {users.map(user => (
              <tr key={user.id}>
                <td> {user.first_name + ' ' + user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.staff === null ? 'Admin' : user.staff.role}</td>
                <td>{user.username}</td>
                <td className={classes.deleteBtn}>
                  <button
                    onClick={() => {
                      setDeleteWindow(true);
                      setDeleteId({
                        id: user.id,
                        full_name: user.first_name + ' ' + user.last_name,
                      });
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        style={
          deleteWindow === true ? { display: 'flex' } : { display: 'none' }
        }
        className={classes.deleteWindow}
      >
        <h2>
          Are you sure you want to delete <span>{deleteId.full_name}</span> ?
        </h2>
        <div className={classes.deleteWindowBtns}>
          <button onClick={handelDeleteUser}>Yes</button>
          <button
            onClick={() => {
              setDeleteWindow(false);
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
