import Todo from './Todo';
import {getTodos} from '../services/todos-api'
import {useState, useEffect} from 'react'
import Create from './CreateTodo'

function Todos() {
  const [todos, setTodos]=useState([]);
 
  useEffect(()=> {
    getTodos()
    .then(res=>setTodos(res.data))
  
    }, [])
  return (
    <div className='todo'>
      <h1>To-dos</h1>
      <div className='create-form'>
        <Create />
      </div>
      
      <ul className='list'>
        {todos.map((todo)=>{
          return(
          <li>
            <a href={`${todo._id}`} >{todo.description}</a>
          </li>)
        })}
      </ul>
        
    </div>
  )
}

export default Todos