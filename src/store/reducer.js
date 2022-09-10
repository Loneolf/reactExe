import { combineReducers } from 'redux';
import testList from 'pages/home/testPage/testReducer/reducerChangeList/reducer';

const test = (state = 0, action) => {
  switch (action.type) {
    case 'changeValue':
      state = action.item;
      return state;
    default:
      return state;
  }
};

const loadingOver = (state = false, action) => {
  if (action.type === 'loadingOver') {
    return true;
  }
  return state;
};

export default combineReducers({
  test,
  testList,
  loadingOver
});
