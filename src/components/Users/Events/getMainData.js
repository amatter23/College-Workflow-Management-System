import { redirect } from 'react-router-dom';

import { getAuthToken } from './auth';
export const api_url = 'https://tms-production.up.railway.app'; // API URL
const auth = 'Bearer ' + getAuthToken();

// det user data
export function getUserData() {
  return fetch(api_url + '/auth/users/me/', {
    headers: {
      Authorization: auth,
    },
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
}

// get tasks list for user //taskOrder is a (sent-tasks or resved tasks)
export function getTasks(taskOrder) {
  return fetch(api_url + taskOrder, {
    headers: {
      Authorization: auth,
    },
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
}
// get tasks filltred by status  //taskOrder is a (sent-tasks or resved tasks)
//taskStatus is a (true or false)
export function getTasksFilltred(taskOrder, taskStatus, paginationUrl) {
  if (paginationUrl !== null) {
    return fetch(paginationUrl, {
      headers: {
        Authorization: auth,
      },
    })
      .then(response => response.json())
      .then(data => {
        return data;
      });
  } else {
    return fetch(api_url + taskOrder + '/?status=' + taskStatus, {
      headers: {
        Authorization: auth,
      },
    })
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }
}

// create a new task
export function createTask(
  taskTitle,
  taskDescription,
  // taskFile,
  taskDeadline,
  taskReceiver
) {
  return fetch(api_url + '/sent-tasks/', {
    method: 'POST',
    body: JSON.stringify({
      title: taskTitle,
      description: taskDescription,
      deadline: taskDeadline,
      file: null,
      status: false,
      receivers: taskReceiver,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: auth,
    },
  });
  // if response is ok return true if response contains error return false
  // .then(response => {
  //   if (response.ok) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // })
}

export function addResponsee(formData) {
  return fetch(api_url + '/tasks-responses/', {
    method: 'POST',
    body: formData,

    headers: {
      Authorization: auth,
    },
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
}
// update a task details
export function updateTask(
  taskId,
  taskDeadline,
  taskStatus,
  taskReceiver,
  taskTitle
) {
  return fetch(api_url + '/sent-tasks/' + taskId + '/', {
    method: 'PUT',
    body: JSON.stringify({
      deadline: taskDeadline,
      file: null,
      status: taskStatus,
      receivers: taskReceiver,
      title: taskTitle,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: auth,
    },
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
}
// get task information
export function getTask(taskId, taskOrder) {
  return fetch(api_url + taskOrder + '/' + taskId, {
    headers: {
      Authorization: auth,
    },
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
}

// get list of receivers
export function getReceivers() {
  return fetch(api_url + '/receivers/', {
    headers: {
      Authorization: auth,
    },
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
}

export function updateUserData(firstName, lastName, email) {
  return fetch(api_url + '/auth/users/me/', {
    method: 'PUT',
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      email: email,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: auth,
    },
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
}

export function searchTasks(taskOrder, searchValue, taskStatus) {
  return fetch(
    api_url +
      taskOrder +
      '/' +
      '?status=' +
      taskStatus +
      '&search=' +
      searchValue,
    {
      method: 'GET',
      headers: {
        Authorization: auth,
      },
    }
  )
    .then(response => response.json())
    .then(data => {
      return data;
    });
}

export function deleteTask(taskId) {
  return fetch(api_url + '/sent-tasks/' + taskId + '/', {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: auth,
    },
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
}
