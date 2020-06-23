import React from 'react'
import ReactDOM from 'react-dom'
import Graph from './components/Graph'


const App = () => {
  return (
    <div>
      <Graph/>
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector("#root"));
