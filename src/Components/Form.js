import React,{useState} from 'react'

const Form = (props) => {

  let [input,setInput]=useState();
  return (
    <form onSubmit={(e)=>{ e.preventDefault();props.addElement(input)}} >
        <input type="text" onChange={(e)=>{setInput(e.target.value)}} />
        <button>SUBMIT</button>
    </form>
  )
}

export default Form