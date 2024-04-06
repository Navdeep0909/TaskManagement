import { Button } from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";



export function Todos({todos, setTodos}){

    const navigate = useNavigate();

    // Delete Todo
    async function deleteTodo(todoId){
        try {
            await axios.delete(`http://localhost:3000/api/v1/todo/deleteTodo/?id=${todoId}`)
            // Remove the deleted user from the users state
            setTodos(todos.filter(todo => todo._id !== todoId));
            alert("Delete request successful!");
            console.log('User deleted successfully');
        } catch (error) {
            alert("Error: Unable to delete resource.!");
            console.error('Error deleting user:', error);
        }
    }

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div>
                <Button onClick={() => {
                    navigate("/")
                }} label={"<- Go Back"} />
            </div>
            {todos?.map(todo => { 
                return <div key={todo._id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <p>Status: {todo.status}</p>
                    <Button onClick={() => {
                        deleteTodo(todo._id)}} label={"Delete Task"} />
                </div>
            })}
        </div>
    </div>
}