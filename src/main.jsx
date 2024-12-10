import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context from './Fitness Tracker/Context.jsx'
import { Provider } from 'react-redux'
import store from './NotePad/NoteStore.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>

 <Context>

   <StrictMode>
      <App />
   </StrictMode>
   
 </Context>
  </Provider>
  
    
)
