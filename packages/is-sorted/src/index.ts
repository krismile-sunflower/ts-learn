
const nums: number[] = [1, 2, 3, 4, 5];

type CompareFunction = (a: number, b: number) => number;
function defaultSort(a: number, b: number): number {
    return a - b;
}
function isSorted(arr: number[], compare: CompareFunction = defaultSort): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
       if (compare(arr[i], arr[i + 1]) > 0) {
           return false;
       }
    }
    return true;
}


export default isSorted;