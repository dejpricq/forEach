function doubleValues(arr){
    let newArr = [];
    arr.array.forEach(function(val) {
        newArr.push(val * 2);
    });
    return newArr;
}

function onlyEvenValues(arr){
    let newArr = [];
    arr.array.forEach(function(val){
        if (val % 2 === 0) {
            newArr.push(val);
        }
    });
    return newArr;
}