import React, {useState, useEffect, useRef, useCallback} from 'react';
import randomColor from 'randomcolor';

export default function Playground() {
  // useState is a function. argument is initial state
  // returns an array [state, fucntionToUpdate]

  const inputRef = useRef();

  const [count, setCount] = useState(30);
  const [color, setColor] = useState(randomColor());

  useEffect(() => {
    inputRef.current.focus();
  }, [count]);

  // useEffect is a function
  //
  // useEffect(() => {
  //   setColor(randomColor())
  //   inputRef.current.focus()
  // }, [count]);

  const cb = useCallback(num => console.log(num), [count]);

  return (
    <div style={{borderTop: `10px solid ${color}`}}>
    {console.count('counter')}
    <div>{count}</div>
    {/*<button onClick={() => setCount(count - 1)}>-</button>*/}
    {/*setState is asynchronous, not good practice to rely on value, it might not be the correct one*/}
    <button onClick={_ => setCount(currentCount => currentCount - 1)}>-</button>
    <button onClick={_ => setCount(currentCount => currentCount + 1)}>+</button>
    <button onClick={_ => setColor(randomColor())}>Change color</button>
    <hr />
    <input ref={inputRef} type="range" value={count} onChange={e => setCount(e.target.value)}/>.
    <Calculate cb={cb} num={count}/>
    </div>
  )
}

const Calculate = React.memo(({cb, num}) => {
  cb(num)
  // return # of renders
  const renderCount = useRef(1);
  return <div>Component rendered: {renderCount.current++} times</div>

})
