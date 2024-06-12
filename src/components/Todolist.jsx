import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Removetodo } from '../store/Todoslice'

function Todolist() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    todos.filter((todo) => todo.Text !== "");

  return (
    <>
    <div>Todo List</div>
    <ul className='flex items-center flex-col'>
        {todos.map((todo) => (
          
            <li key={todo.id} className=' w-[95%] bg-red-500 rounded text-left px-7 text-white my-2 h-8 pt-1 flex'>
              <div className='w-[98%]'>
                {todo.Text}
              </div>
                
                <button className=' al left-[90%] h-[85%] w-14 bg-black  rounded-md' onClick={() => dispatch(Removetodo(todo.id))  }>X</button>
            </li>
          
            
        ))}
    </ul>
    </>
  )
}

export default Todolist
