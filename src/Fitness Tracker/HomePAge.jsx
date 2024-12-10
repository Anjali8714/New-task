import React, { useContext, useState  } from 'react'
import { Contextvalue } from './Context'

const HomePAge = () => {
  const {list,setList,filteredData,filter,setFilter}=useContext(Contextvalue);

  const [activity,setActivity]=useState('Running')
  const [distance,setDistance] =useState('')
  const [time,setTime] =useState('')
  const [summary,setSummary] =useState('')
 

   const handlesubmit=()=>{
    setList([...list,
      {
        id:Date.now(),
        activity,
      distance,
      time,
      summary
      }])

    setDistance('');
    setTime('');
    setSummary('');
    setActivity('Running');
   }

   
  return (
    <div>
      <select value={activity} onChange={(e)=>setActivity(e.target.value)}>
        <option>Running</option>
        <option>Walking</option>
        <option>Cycling</option>
      </select>

      <label htmlFor="distance">Distance</label>
      <input type="number" value={distance} onChange={(e)=>setDistance(e.target.value)} placeholder='distance'/>

      <label htmlFor="Time">Time</label>
      <input type="number" value={time} onChange={(e)=>setTime(e.target.value)} placeholder='time'/>

      <label htmlFor="Summary">Summary</label>
      <textarea value={summary} placeholder='Summary' onChange={(e)=>setSummary(e.target.value)}/>

      <select id="category" value={filter} onChange={(e)=>setFilter(e.target.value)}>

          <option value="All">All</option>
          <option value="running">Running</option>
          <option value="Walking">Walking</option>
          <option value="Cycling">Cycling</option>
          
        </select>

      <button onClick={handlesubmit}>Add</button>

      <ul>
        {
          filteredData.map((item)=>(
            <li key={item.id}>
              <p>Exercise Type:{item.activity}</p>
              <p>Distance:{item.distance}</p>
              <p>Time:{item.time}</p>
              <p>Summary:{item.summary}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default HomePAge
