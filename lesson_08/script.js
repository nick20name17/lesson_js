function greet(userName = 'User') {
    // username !== false, !== undefined, !== null, !== '', !== 0, !== NaN
    if (userName) {
        console.log('Hello' + ', ' + userName)
    } else {
        console.log('Enter user name')
    }
}

greet('Mark')
greet('John')
greet()

function printArray(arr) {
    if (arr.length === 0) {
        console.log('Error: Array is empty')
    } else {
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i]
            console.log(element)
        }
    }
}

printArray([1, 2, 3, 4])
printArray(['Apple', 'Orange', 'Banana'])
printArray([])

function sum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }

    return 'Error: a or b is not a number'
}

const res = sum(2, 2)

const number = 5

function logNumber() {
    console.log(number)
}

logNumber()
