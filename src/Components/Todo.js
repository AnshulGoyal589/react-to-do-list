import React from 'react'

const Todo = (props) => {
  return (
    <li key={props.item.id} >
        INDEX : {props.index} and id is {props.item.id} and task is {props.item.task}
    </li>
  )
}

export default Todo