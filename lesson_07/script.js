const user = {
    name: 'Nazar',
    age: 12,
    isStudent: true,
    country: 'Ukraine',
}

if (!user.isStudent) {
    console.log('Hello')
}

// true                             // false
if (user.isStudent || (user.country === 'Ukraine' && user.age > 18)) {
    console.log('you get free course')
}

if (user.age > 18 && user.isStudent) {
    console.log('User is pass')
} else {
    console.log('User is not pass')
}

const height = 160

if (height !== 160) {
    console.log('you hight enough!')
}
