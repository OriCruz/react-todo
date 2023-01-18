import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Todos from './components/Todos' 
import Todo from './components/Todo'
import EditToDo from './components/EditToDo';


function App() {
  return (
    <div className="App">
    
      <Router>
        <Routes>
        <Route path='/' element={<Todos/>}/>
        <Route path='/:id' element={<Todo/>}/>
        <Route path='/:id/edit' element={<EditToDo/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;