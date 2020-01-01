import React from 'react';
import {addTodo} from '../actions/index'
import {useDispatch} from 'react-redux';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = React.useState("");

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(todo))
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        onChange={handleChange}
        type="text"
        value={todo}
        />
        <button>Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo;
