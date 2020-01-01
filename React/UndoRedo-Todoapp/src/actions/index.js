export const addTodo = (payload) => ({
  type: "ADD_TODO",
  payload
})


export const undo = payload => ({
  type: "UNDO",
  payload
})


export const redo = payload => ({
  type: "REDO",
  payload
})
