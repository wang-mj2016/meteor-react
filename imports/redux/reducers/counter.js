import * as ActionTypes from '../actions/counter.js';

const initialState = {
  number: 0,
};

export function counter(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_ONE:
      return Object.assign({}, state, { number: state.number + 1 });
    case ActionTypes.REDUCE_ONE:
      return Object.assign({}, state, { number: state.number - 1 });
    default:
      return state;
  }
}
