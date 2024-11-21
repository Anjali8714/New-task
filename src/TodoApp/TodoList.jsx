import React, { useState } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { addtodo, deletetodo } from './TodoSlice'
import { useNavigate } from 'react-router-dom'

const TodoList = () => {

    const [input , setInput] = useState('')
    const navigate = useNavigate()

    const todo = useSelector((state) => state.todos.value);
    const dispatch = useDispatch()

    const handleadd = () => {
        if(input.trim()){
            dispatch(addtodo(input))
            setInput('')
        }
    } 

    const handledelete = (id) => {
        dispatch(deletetodo(id))
    }

    const handleedit =(id) => {
        navigate(`/edit/${id}`)
    } 

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={input} placeholder='Enter something' onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleadd}>Add</button>
    
    <ul>
        {todo.map((todo) => (
            <li key={todo.id}>
                <p>{todo.text}</p>
                <button onClick={() => handledelete(todo.id)}>del</button>
                <button onClick={() => handleedit(todo.id)}>Edit</button>
            </li>
        ))}
    </ul>
    </div>
  )
}

export default TodoList
