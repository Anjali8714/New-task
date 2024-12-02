import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormContext } from './Context'

const Home = () => {
  const {datas,setDatas} = useContext(FormContext);
    const navigate = useNavigate()
    const handleDelete = (id) => {
      setDatas(datas.filter((item) => item.id === !id))
    }
  return (
    <div>
      <h3>Home Page</h3>
      <button onClick={()=> navigate('/formpage')}>Create</button>
      <div>

        <table style={{border:'1px solid',marginTop:"20px"}}>
    <thead>
      <tr>
        <th style={{padding:3}}>Name</th>
        <th style={{padding:3}}>Batch</th>
        <th style={{padding:3}}>Week</th>
        <th style={{padding:3}}>Id</th>
        <th style={{padding:3}}>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            datas.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.batch}</td>
                <td>{item.week}</td>
                <td>{item.id}</td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))
        }
    </tbody>
</table>
</div>
    </div>
    
  )
}

export default Home



// import React, { useContext } from 'react';
// import { FormContext } from './Context';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const { data, setData } = useContext(FormContext);
//   const navigate = useNavigate();

//   // Function to delete a row by ID
//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   return (
//     <div>
//       <h3>Home Page</h3>
//       <button onClick={() => navigate('/formpage')}>Create</button>
//       <div>
//         <table border="1" style={{ marginTop: '20px' }}>
//           <thead>
//             <tr>
//               <th style={{ padding: 3 }}>Name</th>
//               <th style={{ padding: 3 }}>Batch</th>
//               <th style={{ padding: 3 }}>Week</th>
//               <th style={{ padding: 3 }}>Id</th>
//               <th style={{ padding: 3 }}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.name}</td>
//                 <td>{item.batch}</td>
//                 <td>{item.week}</td>
//                 <td>{item.id}</td>
//                 <td>
//                   <button onClick={() => handleDelete(item.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Home;

