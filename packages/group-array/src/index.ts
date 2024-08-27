type Prop<T> = { [key: string]: T };
function groupBy<T>(arr: Prop<T>[], ...prop: string[]): Prop<T> {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        result[element[prop[0]] as string] = [...(result[element[prop[0]] as string] || []), element];
    }

    const newProp = prop.slice(1); // 逐渐减少prop的长度,每一次递归就减少一个长度

    if (newProp.length > 0) {
        result = Object.keys(result).reduce((acc, key) => {
            acc[key] = groupBy(result[key], ...newProp);
            return acc;
        }
            , {});
    }

    return result;
}

export default groupBy;
