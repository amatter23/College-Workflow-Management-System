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

export function fetchlogin(email, password) {
  console.log('Fetch login');
  return fetch('http://127.0.0.1:8000/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: email,
      password: password,
    }),
  }).then(res => {
    if (res.status === 200) {
      return res.json().then(data => {
        setAuthToken(data.access_token);
        redirect('/');
        return true;
      });
    } else {
      return false;
    }
  });
}

export function logout() {
  removeAuthToken();
}
