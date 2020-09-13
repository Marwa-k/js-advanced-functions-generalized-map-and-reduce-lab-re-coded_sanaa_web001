// Add your functions here
function map(arr,func){
    const newArr = []
    for (let i=0; i < arr.length; i++) {
        newArr.push(func(arr[i]))
    }
    return newArr
}

function mapToNegativize(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(-1 * src[i]) // Unique work
  }
  return r
}