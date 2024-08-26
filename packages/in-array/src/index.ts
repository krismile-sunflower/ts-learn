
/**
 * 判断当前值是否在数组中
 * @param array 传入的数组
 * @param value 传入的值
 * @returns 
 */
function inArray<T>(array: T[], value: T): boolean {
    if (Array.isArray(array)) {
        return array.includes(value as T);
    }

    return false;
}

export default inArray;
