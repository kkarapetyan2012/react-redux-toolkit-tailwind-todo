// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';
import { v4 as uuidv4 } from 'uuid';

function TodoForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    dispatch(addTodo({
      id: uuidv4(),
      title,
      description,
      completed: false
    }));

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex justify-center align-center ' >
        <div className='mr-[12px]'>
          <label>Title: </label>
          <input
            className='border-slate-300 border-2 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='mr-[12px]'>
          <label>Description: </label>
          <input
            className='border-slate-300 border-2 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className='bg-blue-700 hover:bg-blue-900 ml-[12px] px-3 py-2 text-white rounded-md' type="submit">Add Todo</button>
      </div>
    </form>
  );
}

export default TodoForm;