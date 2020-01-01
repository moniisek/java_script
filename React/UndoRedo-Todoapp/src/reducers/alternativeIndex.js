import produce, {applyPatches, produceWithPatches} from 'immer'


const initState = {
  todos: [],
  canUndo: false,
  canRedo: false
}


// later on undoable is an array of objects, each object has patches and inversePatches for the action
// samilar for undone - which is populated after an "undo" action
let history = {
  undone: [],
  undoable: []
}


const reducer = ((state = initState, action) => {
  const [nextState, patches, inversePatches] = produceWithPatches(state, draft => {
    switch(action.type) {
      case "ADD_TODO":
        draft.todos.push(action.payload);
        break;

      case "FOUND_BAD_WORD":
        break;

      default:
        break;
    }
  })

  switch(action.type) {
    default:
      if (patches.length > 0) {
        history = {
          undoable: [{patches, inversePatches}, ...history.undoable],
          undone: []
        }
        return {
          ...nextState,
          canUndo: true
        }
      }
      return nextState;

    case "UNDO":
      const lastPatches = history.undoable[0];
      history = {
        undone: [lastPatches, ...history.undone],
        undoable: history.undoable.slice(1)
      }
      return produce(applyPatches(nextState, lastPatches.inversePatches), draft => {
        if (history.undoable.length === 0) {
          draft.canUndo = false;
        }
        if (history.undone.length > 0) {
          draft.canRedo = true;
        }
      })


    case "REDO":
      const nextPatches = history.undone[0];
      history = {
        undoable: [nextPatches, ...history.undoable],
        undone: history.undone.slice(1)
      }
      return produce(applyPatches(nextState, nextPatches.patches), draft => {
        if (history.undone.length === 0) {
          draft.canRedo = false;
        }
      })
  }
})


export default reducer;
