import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {  edittodo } from './TodoSlice'
import { useNavigate } from 'react-router-dom'

const Edittodo = () => {
    const dispatch =useDispatch()
    const [input ,setInput] = useState('')
    const navigate = useNavigate()

    const handleadd = () => {
        if(input.trim()){
            dispatch(edittodo(input))
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
