import React from 'react'
import Navabar from './Navabar'
import Hero from './Hero'
import Form from './Form'

const TodoApp = (props) => {
  return (
    <div>
        {/* <Navabar/> */}
        <Form addElement={props.addElement} /> 
        <Hero allTodos={props.allTodos}/>
    </div>
  )
}

export default TodoApp