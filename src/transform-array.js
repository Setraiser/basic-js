module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();
    if (!arr.length) return arr;
    let newArr = [];
    arr.forEach((item, idx) => {

        switch (item) {
           
            case "--double-next":
                if (idx + 1 < arr.length) newArr.push(arr[idx + 1]);
            break;
            case "--double-prev":
                if (idx > 0) newArr.push(arr[idx - 1]);
            break;
            case "--discard-prev":
                if (idx > 0) newArr.pop();
            break;
            case "--discard-next":
                break;
            default:
                if (arr[idx - 1] !== "--discard-next") newArr.push(item);
            break;
        }
    });
    return newArr;
};
