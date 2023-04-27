import react, { useEffect, useState } from 'react';
import classes from './UserTable.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { getAllTasks, deleteTaskAdmin } from '../../Users/Events/getMainData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TasksTables = props => {
  // state for store all tasks
  const [tasks, setTasks] = useState([]);
  // state for loading
  const [isLoading, setIsLoading] = useState(true);
  // state for error
  const [error, setError] = useState(false);
  // state for delete window
  const [deleteWindow, setDeleteWindow] = useState(false);
  // state for delete id and title
  const [deleteId, setDeleteId] = useState({
    id: null,
    title: '',
  });
  // state for reload tasks
  const [reloadTasks, setReloadTasks] = useState(false);
  // delete task function
  const handelDeleteTask = async e => {
    try {
      const response = await deleteTaskAdmin(deleteId.id);
      toast.success('success');
      setDeleteWindow(false);
      setReloadTasks(!reloadTasks);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error('Try again later', {});
      setDeleteWindow(false);
    }
  };
  // get all tasks function
  const fetchData = async () => {
    try {
      const response = await getAllTasks();
      if (response.error === true) {
        setError(true);
        setIsLoading(false);
      } else {
        setTasks(response.data.results);
        setIsLoading(false);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // get all tasks
  useEffect(() => {
    fetchData();
  }, [reloadTasks]);

  // if loading
  if (isLoading) {
    return (
      <div className={classes.centered}>
        <h1>Loading...</h1>
      </div>
    );
  }
  // if error
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
              <th>Title</th>
              <th>Sender</th>
              <th>Reserver</th>
              <th className={classes.deleteBtn}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td> {task.title}</td>
                <td>{task.staff.user}</td>
                <td>{task.receivers.user}</td>
                <td className={classes.deleteBtn}>
                  <button
                    onClick={() => {
                      setDeleteWindow(true);
                      setDeleteId({
                        id: task.id,
                        task_name: task.title,
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
          Are you sure you want to delete <span>{deleteId.title}</span> ?
        </h2>
        <div className={classes.deleteWindowBtns}>
          <button onClick={handelDeleteTask}>Yes</button>
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

export default TasksTables;
