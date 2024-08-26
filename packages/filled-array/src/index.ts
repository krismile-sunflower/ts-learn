
/**
 * 填充数组
 * @param value 数组需要填充的值
 * @param count 数组的数量
 * @returns 填充数组
 */

function filled<T>(value: T, count: number): T[] {
    if (typeof value === 'function') {
        return Array.from({ length: count }, (_, index) => value(index));
    }
    
    if (count <= 0) {
        return [];
    }
    return Array.from({ length: count }, () => value);
    
}

export default filled;