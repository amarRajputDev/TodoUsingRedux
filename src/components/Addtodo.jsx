import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Addtodo } from '../store/Todoslice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handle = (e) => {
    e.preventDefault();
    if (input !== "") {
      dispatch(Addtodo(input));
      setInput('');
      console.log(input);
    }
     // Dispatching the addTodo action
    
    
  };

  return (
    <div>
      <form className="rounded-lg bg-white p-10 shadow-lg" onSubmit={handle}>
        <div className="mb-4 flex items-center">
          <input type="text" className="w-full rounded-lg border border-gray-400 p-2" placeholder="Todo..." value={input} onChange={(e) => { setInput(e.target.value) }} />
          <button className="ml-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
