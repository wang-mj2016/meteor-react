import * as ActionTypes from '../actions/article.js';

const initialState = {
  items: [],
  selectedId: null,
  isEditing: false,
};

export function article(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_ENTRY:
      return Object.assign({}, state, { selectedId: null, isEditing: true });
    case ActionTypes.CANCEL_EDIT:
      return Object.assign({}, state, { isEditing: false, selectedId: null });
    case ActionTypes.UPDATE_ENTRY_LIST:
      return Object.assign({}, state, {
        isEditing: false,
        selectedId: null,
        items: action.items,
      });
    default:
      return state;
  }
}
