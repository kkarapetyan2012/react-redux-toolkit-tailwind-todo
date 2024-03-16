// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectFilter } from '../features/todos/todosSlice';

function Filter() {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilter);

  return (
    <div className='flex justify-center my-[12px]' >
      {['all', 'completed', 'incomplete'].map((filter) => (
        <button 
          key={filter}
          disabled={currentFilter === filter}
          onClick={() => dispatch(setFilter(filter))}
          className={`bg-blue-700 hover:bg-blue-900 ml-[12px] px-3 py-2 text-white rounded-md ${
            currentFilter === filter ? 'bg-blue-900' : ''}`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default Filter;

