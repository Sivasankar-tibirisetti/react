import React,{useState} from 'react'


const Input = () => {
const [input, setInput]=useState('hello')
const handleInput=(event)=> {
    setInput(event.target.value)
}
  return (
    <div>Input
        <input type ="text" onChange={handleInput}/> 
        <p>{input}</p>
         </div>
  )
}

export default Input