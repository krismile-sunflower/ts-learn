type Param = { [key: string]: string };

type Fn = (key: string, value: string) => string;
const handler: Fn = (key, value) => key + " " + value;

/**
 * 映射数组
 * @param obj 映射对象
 * @param fn 映射函数
 * @returns 映射数组
 */
function mapArray(obj: Param, fn: Fn = handler): string[] {
    const result: string[] = [];
    for (const key in obj) {
        const v = fn(key, obj[key]);
        result.push(v);
    }
    return result;
}

export default mapArray;
