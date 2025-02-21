greet()

// Function declaration
function greet() {
    console.log('Hello 1')
}

// Function expression
const greet2 = function () {
    console.log('Hello 2')
}

greet2()

// Arrow function
const greet3 = () => {
    console.log('Hello 3')
}

greet3()

// function sum(a, b) {
//     return a + b
// }

// const sum2 = (a, b) => { return a + b }
const sum2 = (a, b) => a + b

// const sum3 = (a, b) => {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return a + b
//     }

//     return 'Error'
// }

const sum4 = (a, b) => (typeof a === 'number' && typeof b === 'number' ? a + b : 'Eror')

const square = (x) => x * x

console.log(square(5))
