export const addToList = (todo) => {
  return {
    type: 'add',
    payload: todo
  };
}

export const removeFromList = (todo) => {
  return {
    type: 'remove',
    payload: todo
  };
}
