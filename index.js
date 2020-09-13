// Add your functions here
function map(arr,fun){
    const newArr = []
    for (let i=0; i < arr.length; i++) {
        newArr.push(fun(arr[i]))
    }
    return newArr
}

