/**
 * 数组差集
 * @param arrs 传入的数组
 * @returns 数组差集
 */

function arrayDiff<T>(...arrs: T[]): T[] {
    const len = arrs.length;
    if (len === 0) {
        return [];
    }
    const firstArr = arrs[0] as Array<T>;
    const synthesisArr = arrs.slice(1).flat();
    return firstArr.filter((item) => !synthesisArr.includes(item as T as never));
}

export default arrayDiff;