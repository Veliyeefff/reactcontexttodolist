import React from 'react'
import { useTodo } from './Context/TodoContext'



function List() {
    const {todos,settodos}= useTodo()

    const HandleDelete = (id) =>{
        const deleteditem = todos.filter(x=> x.id!==id)
        settodos(deleteditem)
    }
  return (
    <div>
        <ul>
            {
                todos.map((todos,index)=>{
                    return(
                        <li>{todos.id} {todos.todo} <button onClick={()=>{HandleDelete(todos.id)}}>Delete</button></li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default List