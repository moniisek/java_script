import React from 'react';
import AwesomeCheckbox from './AwesomeCheckbox';
import todosData from './todosData';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {    
    const changedState = this.setState(prevState => {
      const updatedTodos = prevState.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
      return {
        todos: updatedTodos
      }
    })
  }



  render() {
    const todosData = this.state.todos.map(item => <AwesomeCheckbox key={item.id} item={item}
      handleChange={this.handleChange}/>
    )
    return(
      <div className="todo-list">
        {todosData}
      </div>
    )
  }
}

// const todoList = todosData.map(item => <AwesomeCheckbox key={item.id} item={item}/>);
// function App() {
//   return(
//     <div className="todo-list">
//       {todoList}
//     </div>
//   )
// }

export default App;
