const defaultState = {
  inputValue: 0
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'changeValue':
      console.log(action, state.inputValue);
      state.inputValue = action.item;
      return state;

    case 'getValue':
      console.log(action);
      return state;

    default:
      return state;
  }
};

export default reducer;
