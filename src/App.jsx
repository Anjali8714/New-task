import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import NoteHome from './NotePad/NoteHome'
import NodeList from './NotePad/NoteList'
import TodoList from './TodoApp/TodoList'
import EditTodo from './TodoApp/Edit.todo'

const App = () => {
  return (
    <div>
      <BrowserRouter>
     <Routes>
      <Route path='/' Component={TodoList}/>
      <Route path='/edit/:id' Component={EditTodo}/>
     </Routes>
      </BrowserRouter>
       
        
     
    </div>
  )
}

export default App

