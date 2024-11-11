import React, { useContext } from 'react'
import { ComponentContext } from './Context'

const Component2 = () => {
    const {increment} = useContext(ComponentContext)
  return (
    <div>
      <button onClick={increment} className='text-center mt-10'>increment</button>
    </div>
  )
}

export default Component2
