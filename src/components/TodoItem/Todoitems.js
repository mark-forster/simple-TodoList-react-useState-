import React from 'react'
import './Todoitems.css'
function Todoitems({todo,listDeleteHandler}) {
  return (
    <div>
         {
        todo.length ? 
        todo.map(todo=>{
           return(
            <p key={todo.id} className='lists'> <span className='items'>{todo.list}</span>
            <button onClick={()=>listDeleteHandler(todo.id)}><span className='deleteBtn'>X</span></button>
            </p>
           )
        })
         : <h1 className='todoEmptyList'></h1>
        }
    </div>
  )
}

export default Todoitems;