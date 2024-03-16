/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo, updateTodo } from '../features/todos/todosSlice';

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDesc, setEditedDesc] = useState(todo.title);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleComplete({ id: todo.id, completed: !todo.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    dispatch(updateTodo({ id: todo.id, title: editedTitle, description: editedDesc }));
    setIsEditing(false);
  };

  return (
    <li style={{display: 'flex', alignItems: 'center', marginBottom: 12}}>
      <input className='border-slate-300 border-2 rounded-md px-3 py-2 ml-1 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className='border-slate-300 border-2 rounded-md px-3 py-2 ml-1 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1'
          />
           <input
            value={editedDesc}
            onChange={(e) => setEditedDesc(e.target.value)}
            className='border-slate-300 border-2 rounded-md px-3 py-2 ml-1'
          />
        </div>
      ) : (
        <div>
          <span className='inline-flex p-2' style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title} - {todo.description}
          </span>
        </div>
      )}
      {isEditing ? (
        <>
        <button className='bg-blue-700 hover:bg-blue-900 ml-[12px] px-3 py-2 text-white rounded-md' onClick={handleSave} >Save</button>
        <button className='bg-blue-700 hover:bg-blue-900 ml-[12px] px-3 py-2 text-white rounded-md' onClick={handleCancel} >Cancel</button>
        </>
      ) : (
        <>
          <button className='bg-blue-700 hover:bg-blue-900 ml-[12px] px-3 py-2 text-white rounded-md' onClick={handleEdit} >Edit</button>
          <button className='bg-blue-700 hover:bg-blue-900 ml-[12px] px-3 py-2 text-white rounded-md' onClick={handleDelete} >Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;

