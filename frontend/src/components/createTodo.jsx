import { Heading } from './Heading'
import { SubHeading } from './SubHeading'
import { InputBox } from './InputBox'
import { Button } from './Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

export function CreateTodo(){

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("To Do")
  
    const handleChange = (e) => {
      setStatus(e.target.value);
    };

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Task Management App"} />
                <SubHeading label={"Please enter your task details"} />
                <InputBox onChange={(e)=>{
                        setTitle(e.target.value)
                    }} placeholder="title" label={"Title"} 
                />
                <InputBox onChange={(e) => {
                        setDescription(e.target.value)
                    }} placeholder="description" label={"Description"} 
                />
                <div>
                    <div className="text-sm font-medium text-left py-2">
                        Task Status
                    </div>
                    <select
                        value={status}
                        onChange={handleChange}
                        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option value="">Select an option</option>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <div className="pt-4">                    
                    <Button onClick={ async ()=>{
                        console.log("Printing all the input value", title, description, status)
                        const response = await axios.post("http://localhost:3000/api/v1/todo/createtodo", {
                            title,
                            description,
                            status
                        })
                        alert("POST request successful!");
                        console.log("THis is the response of post api",response)
                    }} label={"Add Task"} />
                </div>
                <div>
                    OR
                </div>
                <div className="pt-4">                    
                    <Button onClick={() => {
                        navigate("/todos")
                    }} label={"Show Todos"} />
                </div>
            </div>
        </div>
    </div>
} 