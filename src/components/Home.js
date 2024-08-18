import React, { useState } from 'react'

import{v4 as uuid4} from "uuid";

import Todos from './Todos'

import style from './home.module.css'
import NewTodo from './NewTodo'


const Home = () => {
  const [todos,setTodos]=useState([]);

  const handelAddTodo=(todo)=>{
    setTodos((prevTodos)=>{
      return [...prevTodos,{id: uuid4(),todo}]
       })
       console.log(todos)
  }

  const handleRemoveTodo=(id)=>{
   
   setTodos((previousTodos)=>{
    const filteredTodo=previousTodos.filter((todo)=>todo.id!==id)
    return filteredTodo;
   })
  }
  return (
    <div className={style.container}>
    <h1 style={{color:'white'}}>Todo App</h1>
    <NewTodo  onAddTodo={handelAddTodo}/>
    <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default Home