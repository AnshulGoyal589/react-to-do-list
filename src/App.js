import React,{useState} from 'react'
import { v4 as uuid } from 'uuid';
import TodoApp from './Components/TodoApp';

const allTodos=[
  {
    id:uuid(),
    task:'eat'
  },
  {
    id:uuid(),
    task:'sleep'
  },
  {
    id:uuid(),
    task:'code'
  },
  {
    id:uuid(),
    task:'repeat'
  }
]

const App = () => {

  if(!localStorage.getItem("list")) localStorage.setItem("list",JSON.stringify(allTodos));

  let [allTodosList,setAllTodos]=useState(allTodos);

  const addElement=(newTask)=>{

    const newLi={
      id:uuid(),
      task:newTask
    }

    const updatedTodos=[ ...allTodos,JSON.stringify(newLi) ];
    setAllTodos(updatedTodos);
    localStorage.setItem("list",JSON.stringify(allTodosList))



  }
  return (
    <div>
      <TodoApp allTodos={allTodos} addElement={addElement}/>
    </div>
  )
}

export default App