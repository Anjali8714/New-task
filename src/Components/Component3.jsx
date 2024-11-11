import React, { useContext } from 'react'
import { ComponentContext } from './Context'

const Component3 = () => {

     const {decrement} = useContext(ComponentContext)
  return (
    
      <div>
      <button onClick={decrement} className='text-center mt-10'>decrement</button>
    </div>
    
  )
}

export default Component3
