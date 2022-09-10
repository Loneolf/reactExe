const changeValueSync = (item) => ({
  type: 'changeValue',
  item
});
const getValueSync = (item) => ({
  type: 'getValue',
  item
});

const addToTestList = (item) => ({
  type: 'addToTestList',
  item
});

export {
  changeValueSync,
  getValueSync,
  addToTestList
};
