import React, {useState} from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import PrivateRoute from './PrivateRoute'
import {AuthContext} from "./context/auth"
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = (props) => {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };
  /*Context.Provider is the react context API*/
  return(
    <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
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
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/admin" component={Admin}/>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  )
};

export default App;
