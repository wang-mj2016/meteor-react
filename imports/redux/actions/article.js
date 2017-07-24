export const CREATE_NEW_ENTRY = 'CREATE_NEW_ENTRY';
export const CANCEL_EDIT = 'CANCEL_EDIT';
export const UPDATE_ENTRY_LIST = 'UPDATE_ENTRY_LIST';

export function createNewEntry() {
  return {
    type: CREATE_NEW_ENTRY,
  };
}

export function cancelEdit() {
  return {
    type: CANCEL_EDIT,
  };
}

export function updateEntryList(items) {
  return {
    type: UPDATE_ENTRY_LIST,
    items,
  };
}
