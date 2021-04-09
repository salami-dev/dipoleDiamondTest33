let input_arr = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0]

// input array as string
let input_arr_to_str = ""

// check if input is an array
if (!Array.isArray(input_arr)) {
    throw new Error("Input array is not an array.")
}


input_arr.forEach(function (integer, index, array) {
    // check if array element is integer
    if (typeof integer !== "number") {
        throw new Error("Array Element is Not Integer")
    }

    // concatenate string
    input_arr_to_str += integer

})

// convert input_arr_to_str to array with string values 
// of consecutive 1's

let str_arr = input_arr_to_str.split("0")

// find element that has max length and 
// display it on console

console.log(Math.max(...(str_arr.map(el => el.length))))