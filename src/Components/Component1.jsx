import React, { useContext } from 'react'
import { ComponentContext } from './Context'

const Component1 = () => {
    const {counter} = useContext(ComponentContext)
  return (
    <div>
     <p className='text-center mt-10' >counter value is {counter}</p>

    </div>
  )
}

export default Component1
