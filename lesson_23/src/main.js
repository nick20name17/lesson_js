// try {
//     const user = JSON.parse("{name: 'Nazar'}")
//     console.log(user)
// } catch (error) {
//     alert('Something went wrong')
// }

// console.log('hello')

// function divide(a, b) {
//     try {
//         const res = a / b

//         if (res === Infinity) {
//             throw new RangeError("Can't divide by zero")
//         } else {
//             return res
//         }
//     } catch (error) {
//         console.log(error.name, error.message)
//     } finally {
//         console.log('Divide has been invoked')
//     }
// }

// const res = divide(10, 0)

// console.log(res)

// GET
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         const ul = document.createElement('ul')
//         data.forEach((item) => {
//             const li = document.createElement('li')
//             li.textContent = `${item.name} - ${item.email}`
//             li.classList.add('bg-blue-500', 'text-white', 'p-2', 'm-2', 'rounded-lg')
//             ul.appendChild(li)
//         })

//         document.body.appendChild(ul)
//     })

// fetch('https://jsonplaceholder.typicode.com/posts/5', {
//     method: 'PATCH',
//     body: JSON.stringify({
//         title: 'foo4',
//     }),
// })

// fetch('https://jsonplaceholder.typicode.com/posts/5', {
//     method: 'DELETE',
// })

// const postBtn = document.getElementById('post-btn')

// const addPost = (title, body) => {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title,
//             body,
//         }),
//     })
// }

// postBtn.addEventListener('click', () => {
//     const title = prompt('Enter post title')
//     const body = prompt('Enter post body')
//     addPost(title, body)
// })

// console.log('hello')

// setTimeout(() => {
//     console.log('timeout')
// }, 3000)

// console.log('world')

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const response = undefined

//         if (!response) {
//             reject('Error: no user found')
//         }

//         resolve(response)
//     }, 2000)
// })

// promise
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// async function getUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         if (!response.ok) {
//             throw new Error('Something went wrong')
//         }

//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getUsers()

// fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })

const getFactBtn = document.querySelector('#fact-btn')
const factContainer = document.querySelector('#fact-container')
const fact = document.querySelector('#fact')

async function renderRandomFact() {
    fact.innerHTML = ''
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
    const data = await response.json()

    const p = document.createElement('p')
    p.textContent = data.text
    p.classList.add('text-center', 'max-w-96', 'leading-snug', 'text-lg')

    fact.appendChild(p)
}

renderRandomFact()

getFactBtn.addEventListener('click', renderRandomFact)
