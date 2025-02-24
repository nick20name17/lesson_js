function multiplication(num) {
    for (let i = 1; i <= 10; i++) {
        const res = num * i
        console.log(num + ' * ' + i + ' = ' + res)
    }
}

multiplication(5)
multiplication(7)

const isEven = (num) => num % 2 === 0

const numbers = [2, 100, 18, 7, 13, 5, 1, 0]

function getEvenNumbers(arr) {
    if (!Array.isArray(arr)) {
        return 'Please pass an array'
    }

    if (arr.length === 0) {
        return []
    }

    const res = []

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]

        if (isEven(element)) {
            res.push(element)
        }
    }

    return res
}

console.log(getEvenNumbers([]))

const user = {
    name: 'John',
    email: 'john@email.com',
    age: 18,
    isStudent: false,
}

const user2 = {
    name: 'Mark',
    email: 'mark@email.com',
    age: 14,
}

function getUserInfo(user) {
    const isValid = 'name' in user && 'email' in user && 'age' in user

    const userInfo = `Name: ${user.name}, email: ${user.email}, age: ${user.age}`

    if (isValid && 'isStudent' in user) {
        return userInfo + ', user is Student'
    }

    if (isValid) {
        return userInfo
    }

    return 'User object missed one of the fields: name, email or age'
}

const userInfo1 = getUserInfo(user)
const userInfo2 = getUserInfo(user2)

console.log(userInfo1)
console.log(userInfo2)

function getMaxNumber(arr) {
    if (arr.length === 0) {
        return 'Array is empty'
    }

    let max = arr[0]

    for (let i = 1; i < arr.length; i++) {
        const number = arr[i]

        if (number > max) {
            max = number
        }
    }

    return max
}

const arr = [44, 2, 55, 100, 13]

console.log(getMaxNumber(arr))

const str = 'Hello world!'

function getCharCount(char, str) {
    let charCount = 0

    for (let i = 0; i < str.length; i++) {
        const element = str[i]

        if (char === element) {
            charCount++
        }
    }

    return charCount
}

console.log(getCharCount('o', str))

const str2 = 'Hello world!'

function getReversedStr(str) {
    let reversedStr = ''

    for (let i = str.length - 1; i >= 0; i--) {
        const char = str[i]

        reversedStr += char
    }

    return reversedStr
}

function isPalindrome(str) {
    return str === getReversedStr(str)
}

console.log(isPalindrome('радар'))
