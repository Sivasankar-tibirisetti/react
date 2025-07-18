import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount]=useState('')
    
    const incriment= () => {
         setCount(count +1) 
    }
    const decriment = ()=>{
        setCount (count -1)
    }
    const reset = ()=>{
        setCount (0)
    }
  return (
    <div>Counter
        <h1>{count}</h1>
        <button onClick={incriment}>incriment</button>
        <button onClick={decriment}>decriment</button>
        <button onClick={reset}>reset</button>
        
    </div>
  )
}

export default Counter