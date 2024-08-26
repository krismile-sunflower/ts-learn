
/**
 * 移除元素
 * @param array 传入的数组
 * @param n 需要移除的下标
 * @returns 
 */
function removeArray<T>(array: T[], n: number): T[] {
    if (Array.isArray(array)) {
        // return array.filter((_, index) => index !== n);
        return array.slice(0, n).concat(array.slice(n + 1));
    }
    
    return [];
   
}

export default removeArray;
