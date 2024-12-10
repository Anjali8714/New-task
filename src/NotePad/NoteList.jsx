import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { additem } from './NoteSlice';

const NoteList = () => {
    const dispatch = useDispatch();
    const navigate =useNavigate();

    const [note , setNote] = useState('');

    
  const handleadd = () => {
    if(note.trim()){
      dispatch(
        additem({
          id:Date.now(),
          note,
          done:false
        })
      )
      navigate('/')
    }
  }
  return (
    <div>
        <h1>Note:</h1>
        <textarea value={note} onChange={(e) => setNote(e.target.value)}></textarea>
            <button onClick={handleadd}>Add</button>
      
    </div>
  )
}

export default NoteList
