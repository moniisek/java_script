import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import EditButtons from './EditButtons'


const App = () => {

  return (
    <div>
      <AddTodo />
      <TodoList />
      <EditButtons />
    </div>
  )
}


export default App;
