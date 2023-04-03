// Create a function that takes an array with only numbers and returns the first element.
/*let x = 6
console.log("Hello World!")
function myArrayfunc(arr) {
    return arr[1][3]
}
if(x == 5) {
    console.log("True")
}

console.log(myArrayfunc([["Niklas"],[1, 2, 3, 4, 5, 6, 7]]))


// Create a function that takes a number, increment the number by 1 and return the result

function inc(x) {
    return x+1
}

console.log(inc(5))


// Create a function that takes an integer minutes and convert it to seconds

function convSec(min) {
     return (min * 60)
}
console.log(convSec(1))


// Create a function that takes 2 numbers, returns "True" if the sum of both numbers is less than 100, otherwise "False"

function lessThan(x, y){
    if(x+y < 100) {
        return true
    } else {
        false
    }
}

//Alternate method below

const lessThan = (x, y) => (a+b) < 100



// Create a function that takes an array of numbers and return both minimum and max numbers in order
//minMax[1, 2, 3]

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    function startEnd(i) {
        var a = i[0]
        var b = i[i.length - 1];
        return [a, b]
    }
console.log(startEnd(array))

*/
//Alternative method below

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function startEnd(arr){
    let outputArr = []
    let minArr = [0]
    let maxArr = [0]

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < minArr) {
            minArr = arr[i]
        }
        if(arr[i] > maxArr)
            maxArr = arr[i]
    }
}
outputArr.push(minArr)
outputArr.push(maxArr)

return outputArr
console.log(function startEnd(arr))