import produce, {applyPatches} from 'immer';


const initState = {
  todos: []
}


const history = {
  changes: [], // redo
  inverseChanges: [] // undo
}

const rootReducer = ((state = initState, action) => {
  console.log('history', history)
  return produce(state, draft => {
    switch(action.type) {
      case "ADD_TODO":
        draft.todos.push(action.payload);
        break;

      case "UNDO":
        const lastInversePatch = history.inverseChanges.pop();
        if (! lastInversePatch) return;
        // let canUndo = history.inverseChanges.length > 0 ? true: false;
        // applyPatches returns new state
        return applyPatches(state, lastInversePatch);

      case "REDO":
        // UNDO basically handles redo as well ???
        const lastPatch = history.changes.pop();
        if (! lastPatch) return;
        let newState = applyPatches(state, lastPatch);
        console.log(newState);
        return newState

    }

  }, (patches, inversePatches) => {
    history.inverseChanges.push(inversePatches);
    history.changes.push(patches);

  })

})


export default rootReducer;
