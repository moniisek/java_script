import React from 'react'
import {useSelector} from 'react-redux'

const TodoList = (props) => {
  const todos = useSelector(state => state.todos);

  return (
    <ul>
      {todos.map(el => <li>{el}</li>)}
    </ul>
  )
}

export default TodoList;
