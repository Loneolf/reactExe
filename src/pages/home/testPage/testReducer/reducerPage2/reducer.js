const defaultState = {
  inputValue: 0
};

const reducer = (state = defaultState, action) => {
  let a = state.inputValue;
  a = a.set(action.item.get('appName'), action.item);
  switch (action.type) {
    case 'changeValue':
      return state.set('inputValue', a);

    case 'getValue':
      return state.get('inputValue');

    default:
      return state;
  }
};

export default reducer;
