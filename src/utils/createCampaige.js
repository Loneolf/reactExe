/**
 * 给一个数组对象增加key值,key值是随机数
 * @param  {array} arr  [{},{},...]
 * @param  {num} 增加key值到数组对象的第几层
 * @return {array}         增加key值后的数组
 */
function addKey(arr) {
  if (!arr) return arr;
  for (let i = 0; i < arr.length; i++) {
    arr[i].key = Math.random();
  }
  return arr;
}

/**
 * 将一个数组对象的所有key值都删掉
 * @param  {array} arr [{},{},...]
 * @return {array}         增加key值后的数组
 */
function removeKey(arr) {
  if (!arr) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].key) delete arr[i].key;
  }
  return arr;
}

/**
 * 检查数组对象，或者对象中的属性是否有空值
 * @param  {array || Object} arr [{},{},...]，Object：{}
 * @return {array}
 */
function haveNoneValue(arr) {
  if (Array.isArray(arr)) {
    if (arr.length === 0) return arr;
    for (let i = 0; i < arr.length; i++) {
      for (const key in arr[i]) {
        if (key === 'event' && Object.getOwnPropertyNames(arr[i].event).length === 0) return false;
        if (key === 'level1' || key === 'level2') break;
        if (typeof arr[i][key] === 'object') {
          if (!haveNoneValue(arr[i][key])) return false;
        } else if (!arr[i][key]) return false;
      }
    }
  } else {
    for (const key in arr) {
      if (key === 'level1' || key === 'level2') break;
      if (typeof arr[key] === 'object') {
        if (!haveNoneValue(arr[key])) return false;
      } else if (!arr[key]) {
        return false;
      }
    }
  }
  return arr;
}

export { addKey, removeKey, haveNoneValue };
