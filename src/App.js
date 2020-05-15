import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(){
  const  [getCounter, setCounter] = useState(0);
 
  
    return(
     <div>
       
      <div><button onClick={()=>setCounter(getCounter + 1)}>add</button></div> 
      <div>{getCounter}</div>
     </div>
    )
    
}

export default App;
