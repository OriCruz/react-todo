import axios from 'axios';

const baseURL='http://localhost:3001/todos';

//Show all
export const getTodos=()=>{
    const URL = baseURL;
    const response = axios.get(URL);//we are using axios get functionality to grab our todo
    return response;
}
//show one
export const getTodo = (id)=>{
    const URL=`${baseURL}/${id}`;
    const response = axios.get(URL);
    return response;
}

//Edit to-do
export const editTodo=(id, updatedTodo)=>{
const URL=`${baseURL}/${id}`;
const response = axios.put(URL, updatedTodo);
return response;
}

//Create to-do
export const createTodo=(todo)=>{
    const URL = baseURL;
    const response = axios.post(URL, todo);
    return response;
}

//Delete to-do
export const deleteTodo=(id)=>{
    const URL = `${baseURL}/${id}`;
    const response = axios.delete(URL);
    return response;
}