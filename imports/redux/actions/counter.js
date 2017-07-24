export const ADD_ONE = 'ADD_ONE';
export const REDUCE_ONE = 'REDUCE_ONE';

export function addOne() {
  return {
    type: ADD_ONE,
  };
}

export function reduceOne() {
  return {
    type: REDUCE_ONE,
  };
}

// 如果数字小于0则返回，否则执行减一

// 导出奇数加一的方法，该方法返回一个方法，包含dispatch和getstate两个参数，dispatch用于执行action的方法，getstate返回state
export function incrementIfOdd() {
  console.log('kkkk');
}
// 导出一个方法，包含一个默认参数delay,返回一个方法，一秒后加一
export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(addOne());
    }, delay);
  };
}
// 这些方法都导出,在其他文件导入时候,使用import * as actions 就可以生成一个actions对象包含所有的export
