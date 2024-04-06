import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Todos } from './components/todos'
import { CreateTodo } from './components/createTodo'
import axios from "axios"
import './index.css'

function App() {
  const [todos, setTodos] = useState([{
    "title":"Todo1Created",
    "description":"Created todo task 1",
    "status": "To Do"}])

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!newTask.title) return; // Prevent empty title
  //   setTasks([...tasks, newTask]);
  //   setNewTask({ title: '', description: '', status: 'To Do' });
  // };


  // const handleStatusChange = (index, status) => {
  //   const updatedTasks = tasks.map((task, i) =>
  //     i === index ? { ...task, status: status } : task
  //   );
  //   setTasks(updatedTasks);
  // };

  async function fetchTodos() {
    let res = await axios.get("http://localhost:3000/api/v1/todo/bulk")
    setTodos(res.data.todos);
  }


  //Fetching all the todos present in the database
  useEffect(()=>{
    fetchTodos();
  }, [todos]);


  return <div>
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<CreateTodo />} />
        <Route path='/todos' element={<Todos todos={todos} setTodos={setTodos}/>} />
     </Routes>
    </BrowserRouter>
  </div>
}


export default App