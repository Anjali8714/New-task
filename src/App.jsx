import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import HomePAge from './Fitness Tracker/HomePAge'


const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
     <Routes>
      <Route path='/' Component={NoteHome}/>
      <Route path='notelist' Component={NoteList}/>
      </Routes>
      </BrowserRouter>
{/* <NoteHome/> */}

{/* <TodoList/> */} 

<HomePAge/>
    </div>
  )
}

export default App

