import React, { createContext, useState } from 'react'

export const ComponentContext = createContext()

const Context = ({children}) => {

    const [counter , setCounter] = useState(0)

    const increment = () => {
        setCounter(counter+1)
    }

    const decrement = () => {
        setCounter(counter-1)
    }
  return (
   
      <ComponentContext.Provider value={{counter , setCounter , increment , decrement}}>
        {children}
      </ComponentContext.Provider>
   
  )
}

export default Context
