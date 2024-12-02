import React, { createContext, useState } from 'react'

export const FormContext = createContext()

const Context = ( {children}) => {
 

  // const [name,setName] = useState('');
  // const [batch,setBatch] = useState('');
  
  
  const [datas,setDatas] = useState([]);
    

  return (
    <div>
      <FormContext.Provider value={{datas, setDatas}}>
        {children}
      </FormContext.Provider>
    </div>
  )
}

export default Context


// import React, { createContext, useState } from 'react';

// export const FormContext = createContext();

// const Context = ({ children }) => {
//   const [data, setData] = useState([]); // Holds all entries

//   return (
//     <FormContext.Provider value={{ data, setData }}>
//       {children}
//     </FormContext.Provider>
//   );
// };

// export default Context;

