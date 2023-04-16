import { redirect } from 'react-router-dom';

export function getAuthToken() {
  return localStorage.getItem('token');
}

export function setAuthToken(token) {
  localStorage.setItem('token', token);
}

export function removeAuthToken() {
  localStorage.removeItem('token');
}

export function checkAuth() {
  if (localStorage.getItem('token')) {
    return true;
  } else {
    return redirect('/auth');
  }
}
export function loginPageRedirect() {
  if (localStorage.getItem('token')) {
    return redirect('/');
  } else {
    return true;
  }
}

export function fetchlogin(userName, password) {
  return fetch('https://tms-production.up.railway.app/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: userName,
      password: password,
    }),
  }).then(res => {
    if (res.status === 200) {
      return res.json().then(data => {
        setAuthToken(data.access_token);
        window.location.reload();

        return true;
      });
    } else {
      return false;
    }
  });
}

export function logout() {
  removeAuthToken();
  window.location.reload();
}

// *! todo: handel token expire
// *! todo: login errors
