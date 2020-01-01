const initialState = {
  view: {
    status: null,
    data: {
      title: 'ORIGINAl TITLE',
      field: "ZIZOU PRESIDENT"
    }
  },
  edit: {
    status: null,
    data: null,
    changed: null
  }
}

function viewReducer(state = initialState.view, action) {
  switch(action.type) {
    case "EDIT_FORM_SUCCESS":
      return {
        ...state,
        status: "EDIT_FORM_SUCCESS",
        data: action.form,
      };
    default:
      return state;
  }
}

function editReducer(state = initialState.edit, action) {
  switch (action.type) {
    case "ADD_CHANGE":
      const newForm = { ...state.data };
      newForm[action.fieldName] = action.fieldValue;
      return {
        ...state,
        changed: true,
        data: newForm,
      };
    case "SET_UP_EDIT_FORM":
      return {
        ...state,
        changed: false,
        data: action.form,
      };
    case "EDIT_FORM_PENDING":
      return {
        ...state,
        status: "EDIT_FORM_PENDING",
      };
    case "EDIT_FORM_SUCCESS":
      return {
        ...state,
        changed: false,
        data: action.form,
        status: "EDIT_FORM_SUCCESS",
      };
    default:
      return state;
  }
}


function configureStore(initialState) {
  const reducers = combineReducers({
    form: formReducer,
    view: viewReducer,
    edit: editReducer
  });

  return createStore(
    reducers,
    initialState
  )
}
