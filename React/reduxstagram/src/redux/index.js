import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history'

import commentsData from '../data/comments'
import postsData from '../data/posts'

export const defaultState = {
  posts: postsData,
  comments: commentsData
};

// Action creators
export function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index
  }
}

export function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  }
}

export function removeComment(postId, index) {
  return {
    type: "REMOVE_COMMENT",
    index,
    postId
  }
}

// reducers
export function posts(state = [], action) {
  switch(action.type) {
    default:
      return state;
    case "INCREMENT_LIKES":
      return [
        ...state.slice(0,action.index),
        {...state[action.index], likes: state[action.index].likes + 1},
        ...state.slice(action.index+1)
      ]

  }
}

export function comments(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":

      return {
        ...state,
        [action.postId]: state[action.postId].concat([{text: action.comment, user: action.author}])
      };

    default:
      return state;

  }
}

export const history = createBrowserHistory();

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  posts,
  comments
})


export function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(routerMiddleware(history))
  ));
  return store
}
