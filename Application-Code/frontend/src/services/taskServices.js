// import axios from "axios";
// // REACT_APP_BACKEND_URL=http://35.170.147.51:30008/api/tasks
// const apiUrl = process.env.REACT_APP_BACKEND_URL || "/api/tasks";
// // const apiUrl = "/api/tasks";
// // const apiUrl = "http://35.170.147.51:30008/api/tasks";
// console.log(apiUrl);
// export function getTasks() {
//   return axios.get(apiUrl);
// }

// export function addTask(task) {
//   return axios.post(apiUrl, task);
// }

// export function updateTask(id, task) {
//   return axios.put(apiUrl + "/" + id, task);
// }

// export function deleteTask(id) {
//   return axios.delete(apiUrl + "/" + id);
// }

// // check

import axios from "axios";

const apiUrl = "/api/tasks";

export function getTasks() {
  return axios.get(apiUrl);
}

export function addTask(task) {
  return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
  return axios.put(`${apiUrl}/${id}`, task);
}

export function deleteTask(id) {
  return axios.delete(`${apiUrl}/${id}`);
}
