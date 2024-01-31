/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  return typeof str === 'string' || str instanceof String;
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 *  将对象数组里的某一个值，转换为单一值数组
 * @param array 需要转换的对象数组
 * @param key   string 需要拉出来的key值
 * @returns {*[]}
 */
export function shiftArrayFormat(array, key) {
  const tmpArr = []
  if(isArray(array)) {
    for(let i=0; i<array.length; i++) {
      tmpArr.push(array[i][key])
    }
  } else {
    throw new Error("参数array非数组类型")
  }
  return tmpArr
}