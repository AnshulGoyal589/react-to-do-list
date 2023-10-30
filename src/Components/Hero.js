import React from 'react'
import Todo from './Todo'

const Hero = (props) => {
 

  const allTodos = props.allTodos.map((item,index) => {

    return <Todo item={item} index={index} />

  })  

  return (
    <ul>
        {allTodos}
    </ul>
  )
}

export default Hero