import { useState } from 'react'
import { Heading } from './components/Heading'
import { SubHeading } from './components/SubHeading'
import { InputBox } from './components/InputBox'
import { Button } from './components/Button'
import axios from "axios"

function App() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("To Do")

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.title) return; // Prevent empty title
    setTasks([...tasks, newTask]);
    setNewTask({ title: '', description: '', status: 'To Do' });
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleStatusChange = (index, status) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status: status } : task
    );
    setTasks(updatedTasks);
  };



  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Task Management App"} />
        <SubHeading label={"Please enter your task details"} />
        <InputBox onChange={(e)=>{
          setTitle(e.target.value)
        }} placeholder="title" label={"Title"} />
        <InputBox onChange={(e) => {
          setDescription(e.target.value)
        }} placeholder="description" label={"Description"} />
        <select
          value={status}
          onChange={handleChange}
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option value="">Select an option</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <div className="pt-4">
          <Button onClick={ async ()=>{
            const response = await axios.post("http://localhost:3000/api/v1/todo/createtodo", {
                title,
                description,
                status
              })
            console.log(response)
          }} label={"Add Task"} />
        </div>
      </div>
    </div>
  </div>
}


  // return (
  //   <div>
  //     <h1>Task Management App</h1>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         name="title"
  //         placeholder="Title"
  //         value={newTask.title}
  //         onChange={handleChange}
  //         required
  //       />
  //       <textarea
  //         name="description"
  //         placeholder="Description"
  //         value={newTask.description}
  //         onChange={handleChange}
  //       />
  //       <select name="status" value={newTask.status} onChange={handleChange}>
  //         <option value="To Do">To Do</option>
  //         <option value="In Progress">In Progress</option>
  //         <option value="Done">Done</option>
  //       </select>
  //       <button onClick={ async ()=>{
  //           const response = await axios.post("http://localhost:3000/api/v1/todo/createtodo", {
  //               newTask.title,
  //               newTask.description,
  //               newTask.status
  //             })
  //       }}>Add Task</button>
  //     </form>
  //     <ul>
  //       {tasks.map((task, index) => (
  //         <li key={index}>
  //           <div>
  //             <h3>{task.title}</h3>
  //             <p>{task.description}</p>
  //             <p>Status: {task.status}</p>
  //             <button onClick={() => handleDelete(index)}>Delete</button>
  //             <select
  //               value={task.status}
  //               onChange={(e) => handleStatusChange(index, e.target.value)}
  //             >
  //               <option value="To Do">To Do</option>
  //               <option value="In Progress">In Progress</option>
  //               <option value="Done">Done</option>
  //             </select>
  //           </div>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );

export default App
