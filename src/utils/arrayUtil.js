class ArrayUtil {
  /**
     * 从数组删除某个对象
     * @param  {array} arr
     * @param  {object} element
     * @return {array}         删除后的数组
     */
  static remove(arr, element) {
    let index = arr.indexOf(element);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }

  // 只能查找基本数据类型
  /**
     * 找到一个数组，满足property=value
     * @param  {array} arr
     * @param  {string} property
     * @param  {string|number} value
     * @return {array}          新数组
     */
  static findObjectByProperty(arr, property, value) {
    if (!arr) { return null; }
    let ret = [];
    for (let i = 0; i < arr.length; i++) {
      let fValue = arr[i] && arr[i][property];
      // FIXME: 注意 ==
      if (value === fValue) { ret.push(arr[i]); }
    }
    return ret;
  }

  /**
     * 从数组找到第一个满足property=value的数据
     */
  static findOneObjectByProperty(arr, property, value) {
    let ret = ArrayUtil.findObjectByProperty(arr, property, value);
    if (ret && ret.length) { return ret[0]; }
  }

  static ensureUnique(arr, flag) {
    flag = flag || '$';
    let s = arr.join(flag) + flag;
    let unique = 1;
    for (let i = 0; i < arr.length; i++) {
      if (s.replace(arr[i] + flag, '').indexOf(arr[i] + flag) > -1) { unique = 0; }
    }
    return unique;
  }
}

export default ArrayUtil;
