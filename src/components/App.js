import React, { useState } from 'react'
 import '../styles/App.css';

const App = () => {

  const [expenses , setexpences] = useState(0);
  const [input,setInput] = useState("");
  const [arr,setArr] = useState([]);
  const [paisa,setPaisa] = useState(0)
  function handleChange(e){
    setInput(e.target.value);
   
  }

  function handleClick(){
    
    const str = input.indexOf("-");
    setArr([...arr,input])
    const price = +input.slice(str+1,input.length);
    setPaisa(paisa+price);
    console.log(paisa)
    
  }

  

  return (
    <div id="main">
      <input id="expense-input" value={input} onChange={handleChange} />
      <button id="expense-button" onClick={handleClick} >Add Expense</button>
      <div id="expense-list">
        <ul>
          {
            arr.map((item,index)=>{
              return <li key={`item${index+1}`} > {item} </li>
            })
          }
        </ul>
      </div>
      <div id="total-expense">
        Total Expense: {`${paisa}`}
      </div>
    </div>
  )
}


export default App;
