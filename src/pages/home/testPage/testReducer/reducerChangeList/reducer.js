const defaultState = [];

const testList = (state = defaultState, action) => {
  let arr = [];
  let arr2 = [];
  switch (action.type) {
    case 'addToTestList':
      arr = JSON.parse(JSON.stringify(state));
      arr.push(action.item);
      return arr;
    case 'deleteToTestList':
      arr2 = JSON.parse(JSON.stringify(state));
      arr2.splice(action.item.index, 1);
      return arr2;

    default:
      return state;
  }
};

export default testList;
