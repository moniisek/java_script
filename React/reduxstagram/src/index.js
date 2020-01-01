import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import App from './components/App'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'

import {defaultState, configureStore, history} from './redux/index'

const store = configureStore(defaultState);

const router = (
  <Provider store={store}>
    // <ConnectedRouter history={history}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    // </ConnectedRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));
