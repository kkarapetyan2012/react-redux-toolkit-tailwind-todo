// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import TodoForm from './components/TodoForm';
import Filter from './components/Filter';
import TodoList from './components/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="bg-sky-900 text-white text-3xl font-bold text-center py-3">Todo List</h1>
        <div className='w-100 max-w-[780px] mx-auto mt-10 mb-2'>
          <TodoForm />
          <Filter />
          <TodoList />
        </div>
        
      </div>
    </Provider>
  );
}

export default App;
