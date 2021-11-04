import { useState } from 'react'

const Todo = () => {
    const [arr, setArr] = useState([])
    const [task, setTask] = useState('')
    const [isEdit, setEdit] = useState(false)
    const [updateIndex, setIndex] = useState(null)

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
        arr.splice(index, 1)
        setArr([...arr])
        console.log('arr', arr);
        setTask('')
        cancelTodo();
    }

    const editTodo = (index) => {
        setTask(arr[index])
        setEdit(true)
        setIndex(index)
    }

    const cancelTodo = () => {
        setTask('')
        setEdit(false)
    }

    const updateTask = () => {
        arr[updateIndex] = task
        setTask('')
        setEdit(false)
        setIndex(null)
        setArr([...arr])
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
                
                {!isEdit ? <button onClick={AddTodo}>Add Task</button> :
                    <span>
                           <button onClick={updateTask}>Update</button>
                           <span> &nbsp; </span>
                           <button onClick={cancelTodo}>Cancel</button>
                    </span>
                }
                
                </div>
                <ol>
                    {arr?.map((v, i) => {
                        return <li key={i}>
                            <span>{v} &nbsp; </span>
                            <button onClick={(e) => editTodo(i)}>Edit</button>
                            <span> &nbsp; </span>
                            <button onClick={(e) => deleteTodo(i)}>Delete</button>
                        </li>
                        
                    })}
                </ol>
            </div>
        
    )
}

export default Todo