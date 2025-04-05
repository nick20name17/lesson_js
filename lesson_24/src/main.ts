// let age: number = 20
// let name: string = 'Mark'
// let isStudent: boolean = false

import { Admin, User } from './types/user'

// const app = document.getElementById('app')!

// app.classList

type StringNumberBoolean = string | number | boolean

let age = 20

let name = 'Mark'

age = 40

name = 'John'

const numbers: StringNumberBoolean[] = [1, 2, 34, 'hello', 'world', false]

let data: any = 40

data = '4'
data = 4
data = [4343, 4234, '4']

function sum(a: number, b: number) {
    return a + b
}

sum(1, 4)

function greet(string: string): void {
    console.log(string)
}

// type User = {
//     id: number
//     name: string
//     isStudent: boolean
// }

// type Admin = User & {
//     role: UserRole
// }

const user1: User = {
    name: 'John',
    id: 1,
    hobby: 'guitar',
    isStudent: false,
}

const user2: User = {
    name: 'Mark',
    id: 2,
    hobby: 'music',
    isStudent: true,
}

const admin: Admin = {
    name: 'Admin',
    id: 3,
    isStudent: false,
    role: 'admin',
}

function getUserInfo(user: User) {
    return `User name is ${user.name}`
}

if (user1.hobby && user2.hobby) {
    user1.hobby + user2.hobby
}

user1?.hobby! + user2?.hobby

console.log(getUserInfo(user1))
console.log(getUserInfo(user2))

// type Todo = {
//     userId: number
//     id: number
//     title: string
//     completed: boolean
// }

interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
const todo: Todo = await response.json()

console.log(todo.title)

const inputElement = document.querySelector('#price-input') as HTMLInputElement

interface ApiResponse<TData> {
    count: number
    next?: string
    prev?: string
    result: TData[]
}

const todos: ApiResponse<Todo> = {
    count: 5,
    next: 'string',
    prev: 'string',
    result: [
        {
            completed: false,
            id: 1,
            title: 'string',
            userId: 2,
        },
    ],
}

const users: ApiResponse<User> = {
    count: 5,
    result: [
        {
            id: 1,
            isStudent: false,
            name: 'string',
        },
    ],
}
