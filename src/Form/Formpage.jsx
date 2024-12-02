import React, { useContext, useState } from 'react'
import { FormContext } from './Context'
import { useNavigate } from 'react-router-dom'

const Formpage = () => {
    const {datas,setDatas} =useContext(FormContext)
    const [name ,setName] = useState('');
    const [batch ,setBatch] = useState('');
    const [week ,setWeek] = useState('');

    const navigate =useNavigate()

    const Handlesubmit = (e) => {
        e.preventDefault();

        const newEntry = {
          id:Date.now(),
          name,
          batch,
          week,
        }

        setDatas([...datas,newEntry]);
        setName('');
        setBatch('');
        setWeek('');

        navigate('/')
      }

  return (
    <div>
     <form onSubmit={Handlesubmit}>
        <div>
        <label>Name:-</label>
        <input type="text" value={name} placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
        <label>Batch:-</label>
        <input type="text" value={batch} placeholder='Enter your Batch' onChange={(e)=>setBatch(e.target.value)} />
        </div>
        <div>
        <label>Week:-</label>
        <input type="number" value={week}  placeholder='Enter your Batch' onChange={(e)=>setWeek(e.target.value)} />
        </div>
        <button type='submit'>Submit</button>

     </form>
    </div>
  )
}

export default Formpage


// import React, { useContext, useState } from 'react';
// import { FormContext } from './Context';
// import { useNavigate } from 'react-router-dom';

// const Formpage = () => {
//   const { data, setData } = useContext(FormContext);
//   const [name, setName] = useState('');
//   const [batch, setBatch] = useState('');
//   const [week, setWeek] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Create a new entry
//     const newEntry = {
//       id: Date.now(), // Unique ID
//       name,
//       batch,
//       week,
//     };

//     // Add the new entry to the data array
//     setData([...data, newEntry]);

//     // Reset local state
//     setName('');
//     setBatch('');
//     setWeek('');

//     // Navigate back to Home
//     navigate('/');
//   };

//   return (
//     <div>
//       <h3>Form Page</h3>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             placeholder="Enter your name"
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Batch:</label>
//           <input
//             type="text"
//             value={batch}
//             placeholder="Enter your batch"
//             onChange={(e) => setBatch(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Week:</label>
//           <input
//             type="number"
//             value={week}
//             placeholder="Enter the week"
//             onChange={(e) => setWeek(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Formpage;


