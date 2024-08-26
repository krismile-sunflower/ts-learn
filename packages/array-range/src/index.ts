
/**
 * 生成一个数组
 * @param start 数组开始的位置
 * @param end 数组结束的位置
 * @returns 
 */

function arrayRange(start?: number, end?: number): number[] {

    if (start === undefined) {
        return [];
    }

    if (start !== undefined && end !== undefined) {
        return Array.from({ length: end - start }, (_, i) => i + start);
    }
    if (start !== undefined) {
        return Array.from({ length: start }, (_, i) => i);
    }

    return []
    
}

export default arrayRange;