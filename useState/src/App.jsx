
import { useState } from 'react';
import './App.css';

function App() {
 
  const [name,setName]=useState('')
  const [list,setList]=useState(['Ram','Ayush','Biraj'])

  return (
    <>
      <ul>
        {
          list.map((name)=>
          <li>{name}</li>
        
          )
        }
        </ul>
      <input type="text" 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      
      />
      <button onClick={()=>{
        list.push(name)
        setList([...list])
        setName('')
      }
      }>Add</button>
    </>
  )
}

export default App
