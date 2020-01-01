import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {undo, redo} from '../actions/index';

const UndoRedo = () => {
  const canUndo = useSelector(state => state.canUndo);
  const canRedo = useSelector(state => state.canRedo);

  const dispatch = useDispatch();

  function handleUndo () {
    dispatch(undo())
  }

  function handleRedo() {
    dispatch(redo())
  }

  return (
    <p>
      {canUndo && <button onClick={handleUndo}>Undo</button>}
      {canRedo && <button onClick={handleRedo}>Redo</button>}
    </p>
  )

}

export default UndoRedo;
