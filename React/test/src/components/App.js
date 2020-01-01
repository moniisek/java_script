import React from 'react'
import {Provider} from 'react-redux';

import FormPage from './FormPage'

const App = () => {
  return (
    <Provider >
      <FormPage />
    </ Provider>
  )
}

export default App;
