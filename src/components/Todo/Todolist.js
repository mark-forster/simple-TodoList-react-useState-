import React, {useState} from 'react'
import styles from './Todolist.module.css'
import Todoitems from '../TodoItem/Todoitems';

function Todolist() {
    const [todo, setTodo]= useState([]);
    const [list, setList]= useState('');
    const submitList= (e)=>{
            e.preventDefault();
            setTodo([...todo, {id: todo.length, list:list}]);
            setList('')
    }
    const listDeleteHandler= (id)=>{
        const filter= todo.filter(todo=>{
            return todo.id !== id;
        })
        setTodo(filter);
    }
  
  return (
    <div>
       <h1 className={styles.todoHeader}> Todolist </h1> 
       <form action='' className={styles.todoForm} onSubmit={submitList}>
        <input type="text"  placeholder='Enter listItem Name' className={styles.todoInput } value={list} onChange={(e)=>setList(e.target.value)}/>
        <button type="submit" className={styles.todoButton}>Add</button>
       </form>
        <Todoitems todo={todo} listDeleteHandler={listDeleteHandler}/>
       
    </div>
  )
}

export default Todolist