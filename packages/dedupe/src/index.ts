
/**
 * 数据去重
 * @param arr 传入的数组
 * @param changeType 传入的处理函数（主要是将数据类型的转换为string作为key, 并判断是否已经存在的标识）
 * @returns 
 */
type Handler<T> = (element: T) => string

function dedpue<T>(arr: T[], changeType: Handler<T> = JSON.stringify): T[] {
    const clone: T[] = [];
    const lookup: Record<string, boolean> = {};
    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const key = changeType(element);

        // 存在相同的key是便是重复的元素，不做任何处理
        if (!lookup[key]) {
            clone.push(element);
            lookup[key] = true;
        }
    }
    return clone;
}

export default dedpue;