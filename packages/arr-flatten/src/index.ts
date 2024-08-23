type NestedArray<T> = T | NestedArray<T>[];
function flatten<T>(arr: NestedArray<T>[]): T[] {
    //   return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
    const result: T[] = [];
    for (const val of arr) {
        if (Array.isArray(val)) {
            result.push(...flatten(val));
        } else {
            result.push(val);
        }
    }

    return result;
}

export default flatten;