

/**
 * 交换数组中两个元素的位置
 * @param array 传入的数组
 * @param start 开始下标
 * @param end 结束下标
 * @returns 
 */
function swapArray<T>(array: T[], start: number, end: number): T[] {
    if (start < 0 || end < 0) {
        throw new Error('下标不能为负数');
    }

    // if (start >= array.length || end >= array.length) {
    //     throw new Error('下标不能大于数组长度');
    // }

    if (start === end) return array;
    if (Array.isArray(array)) {
        const newArray = [...array];
        const temp = newArray[start];
        newArray[start] = newArray[end];
        newArray[end] = temp;
        return newArray;
    } else {
        throw new Error('请传入正确的数组');
    }
}


export default swapArray;
