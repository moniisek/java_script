import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App'
import reducer from './reducers/alternativeIndex';
import {forbiddenWordsMiddleware} from './middleware/index'

const store = createStore(reducer, applyMiddleware(forbiddenWordsMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
