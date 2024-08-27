// Ts体操类型获取数组的值
// type Type<T> = T extends (infer U)[] ? U : never;

type Result<T> = { [key in string]: T };


/**
 * 判断数据的类型
 * @param value 传入的值
 * @returns 
 */
function flagType<T>(value: T): string {
  return Object.prototype.toString.call(value).split(' ')[1].slice(0, -1).toLowerCase();
}

/**
 * 通过数组生成对象
 * @param array 传入的数组
 * @returns
 */
function mirrArray<T>(array: T[]): Result<T> {
  if (Array.isArray(array)) {
    const newArray = array.map((item) => item + "");
    const result: Result<T> = {};
    newArray.forEach((item, index) => {
        if (flagType(array[index]) === 'object') {
            throw new Error('Invalid input');
        }
      result[item] = array[index];
    });

    return result;
  }

  return {};
}

// console.log(mirrArray([{}, 'a_string', 1234, true, undefined, null]));

console.log(mirrArray(['a', 'a', 'a']));
console.log(mirrArray([]));

export default mirrArray;
