import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Form/Home'
import Formpage from './Form/Formpage'


const App = () => {
  return (
    <div>
      <BrowserRouter>
     <Routes>
      <Route path='/' Component={Home}/>
      <Route path='formpage' Component={Formpage}/>
     </Routes>
      </BrowserRouter>

      
       
        
     
    </div>
  )
}

export default App

