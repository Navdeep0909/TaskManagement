import { Button } from "./Button"

export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <p>Status: {todo.status}</p>
                    <Button label={"Delete Task"} />
                </div>
        })}
    </div>
}