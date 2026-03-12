import axios from "axios";
// const apiUrl = process.env.REACT_APP_BACKEND_URL
const apiUrl = http://35.170.147.51:30467/api/tasks
console.log(apiUrl)
export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}
