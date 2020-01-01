import Main from './Main';
import Single from './Single'
import Photogrid from './Photogrid'

import React from 'react';
import {Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <Main>
      <Switch>
        <Route exact path="/" component={Photogrid} />
        <Route path="/view/:postId" component={Single}/>
      </Switch>
    </Main>
  )
}


export default App;
