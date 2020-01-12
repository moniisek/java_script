import React from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import PrivateRoute from './PrivateRoute'
import {AuthContext} from "./context/auth"

const App = (props) => {
  /*Context.Provider is the react context API*/
  return(
    <AuthContext.Provider value={false}>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home page </Link>
            </li>
            <li>
              <Link to="/admin">Admin page</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home}/>
          <PrivateRoute path="/admin" component={Admin}/>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  )
};

export default App;
