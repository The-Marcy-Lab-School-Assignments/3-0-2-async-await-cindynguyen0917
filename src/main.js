import {
  fetchHandler
} from './from-scratch';

const appDiv = document.querySelector('#app');

// const getUser = async (userId) => {
//   const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
//   const response = await fetch(url);
//   const users = await response.json();
//   console.log(users)
//   return users;
// }
// getUser(-1) ignore, i was just trying to test the code from short answer 4.