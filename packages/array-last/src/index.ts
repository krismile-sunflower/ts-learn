

function arrayLast<T>(arr: T[], n: number = 1): T[] | T {
    const len = arr.length;
    if (len === 0) {
        throw new Error('arrayFirst: array is empty');
    }
    if (len < n) {
        throw new Error('arrayFirst: n is greater than array length');
    }

    return n === 1? arr[len - 1]: arr.slice(n, len);
}

export default arrayLast;