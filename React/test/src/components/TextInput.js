import React from 'react'

const TextInput = ({handleChange, title, value}) => (
  <div>
  <br/>
  {title}
  <br/>
  <input type="text" value={value} onChange={(event) => handleChange(event.target.value)} />
  <br/>
  </div>
)

export default TextInput;
