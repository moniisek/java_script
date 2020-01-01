import React, {useRef, useState} from 'react';

function RefWithHooks() {
  const [sentence, setSentence] = useState('');
  const inputRef = useRef();

  return (
    <div>
    <p>Bob says <input ref={inputRef} type="text" onChange={ _ => setSentence(inputRef.current.value)}/></p>
    <p>{sentence}</p>
    </div>
  )

}


function WithoutHooks() {
  const [sentence, setSentence] = useState('');

  return (
    <div>
    <p>Bob says <input type="text" onChange={ e => setSentence(e.target.value)}/></p>
    <p>{sentence}</p>
    </div>
  )


}

export {RefWithHooks, WithoutHooks}
