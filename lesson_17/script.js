const userName = document.querySelector('.name')
const userEmail = document.querySelector('.email')
const avatar = document.querySelector('.avatar')

const email = 'test'

const user = {
    id: 1,
    firstName: 'John',
    secondName: undefined,
    email: 'john@email.com',
    initials: 'J.D.',
    age: 12,
    isStudent: false,
}

const { email: myEmail, firstName, secondName = '-', initials, age } = user

userName.textContent = firstName + ' ' + secondName
userEmail.textContent = myEmail
avatar.textContent = initials

const adminUser = {
    id: 2,
    firstName: 'John',
    secondName: 'Doe',
    email: 'john@email.com',
    initials: 'J.D.',
    role: 'admin',
    age: 12,
    isStudent: false,
}

const { role, ...justUser } = adminUser

if (role) {
    console.log(role)
}

const fruits = ['banana', 'orange', 'grape']

const [first, ...other] = fruits

console.log(other)

let x = 5
let y = 10

;[x, y] = [y, x]

function showUser({ firstName, secondName = '', age, email }) {
    const userInfo = `Full name: ${firstName} ${secondName}, age: ${age}, email: ${email}`

    document.body.textContent = userInfo
}

showUser(user)
