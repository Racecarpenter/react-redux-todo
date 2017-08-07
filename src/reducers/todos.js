let initialState = [];

export default (state = initialState, action) => {
  console.log('context', action.type)
  switch (action.type) {
    case 'add':
        return [
          ...state,
          {
              title: action.payload,
              completed: false,
              id: makeId()
          }
        ];
    case 'remove':
        return state.filter(todo => todo !== action.payload)
    default:
        return state;
  }
};

var counter = 0
function makeId() {
    return counter++
}
