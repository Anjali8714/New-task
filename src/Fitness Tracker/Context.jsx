import React, { createContext, useState } from 'react'
export const Contextvalue = createContext()
const Context = ({children}) => {
    const [list,setList]=useState([]);
    const [filter,setFilter] = useState('All')

    const filteredData = filter === 'All'?list :list.filter((item) => item.activity.toLowerCase()=== filter.toLowerCase());
  return (
    <div>
      <Contextvalue.Provider value={{list,setList,filteredData,filter,setFilter}}>
        {children}
      </Contextvalue.Provider>
    </div>
  )
}

export default Context
