import { useState } from 'react'

const Todo = () => {
    const [arr, setArr] = useState([])
    const [task, setTask] = useState('')

    const AddTodo = (e) => {
        if(!task.length) {
            return console.log('Plz add task');
        }
        console.log('task', task);
        
        arr.push(task)
        setArr([...arr])
        
        setTask('')
    }

    const deleteTodo = (index) => {
        console.log('index', arr.splice(index, 1));
        console.log('arr', arr);
    }

    return(
        <div>
            <h1>Todo App</h1>
            <div>
                <input 
                    name='task' 
                    placeholder='Add Todo' 
                    onChange = {e => setTask(e.target.value)}
                    value = {task}
                />
                
                <button onClick={AddTodo}>Add Task</button>
                </div>
                <ol>
                    {arr?.map((v, i) => {
                        return <li key={i}>
                            <span>{v} &nbsp; </span>
                            <button onClick={(e) => deleteTodo(i)}>Delete</button>
                        </li>
                        
                    })}
                </ol>
            </div>
        
    )
}

export default Todo