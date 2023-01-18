import {useEffect, useState} from 'react';
import {getTodo, deleteTodo} from '../services/todos-api'
import { useParams, useNavigate } from 'react-router-dom';
function Todo() {
  const nav = useNavigate();//setting up our return to main page
  const {id}=useParams();
  const [todo, setTodo]= useState({});
  useEffect(()=>{
    getTodo(id)
    .then(res=>setTodo(res.data)
    )},[]);

  const deleteTheTodo = ()=>{
    //delete function needs to go here
    deleteTodo(id);
    //nav back to the main screen
    nav('/')
  }
  return (
    
    <div className="single-todo">
      <h2>
        To-do:
      </h2>
        <h3>{todo.description}</h3>
       Completed:<input type='checkbox' defaultChecked={todo.complete}></input>
      <button onClick={()=>{nav(`/${id}/edit`)}}>edit</button>
      <button onClick={deleteTheTodo}>delete</button>
      <button onClick={()=>{nav('/')}}>return to main</button>
      
        
    </div>
  )
}

export default Todo;
