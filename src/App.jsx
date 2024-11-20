import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import NoteHome from './NotePad/NoteHome'
import NodeList from './NotePad/NoteList'

const App = () => {
  return (
    <div>
      <BrowserRouter>
     <Routes>
      <Route path='/' Component={NoteHome}/>
      <Route path='/notelist' Component={NodeList}/>
     </Routes>
      </BrowserRouter>
       
        
     
    </div>
  )
}

export default App

