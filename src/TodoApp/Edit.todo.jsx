import React, { useState } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import {  edittodo } from './TodoSlice'
import { useNavigate, useParams } from 'react-router-dom'

const Edittodo = () => {
    const dispatch =useDispatch()
    const navigate = useNavigate()

    const {id} = useParams()
    
    const todoinput = useSelector((state) => state.todos.value);
    const todoip = todoinput.find((todo) => todo.id.toString() === id)
    const [input ,setInput] = useState(todoip.text)
  
  

    const handleadd = () => {
        if(input.trim()){
            dispatch(edittodo({
              id,input
            }))
            navigate('/')
            setInput('')
            
        }
    } 
    
  return (
    <div>
       
      <input type="text" value={input} placeholder='Enter something' onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleadd}>Add</button>
    
    </div>
  )
}

export default Edittodo
