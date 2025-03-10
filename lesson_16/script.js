const form = document.querySelector('.form')
const taskInput = document.querySelector('#task')

const tasks = [
    {
        id: 1,
        text: 'Do homework',
        checked: false,
    },
]

function renderTasks(taskText) {
    const tasksList = document.querySelector('.tast-list')

    const listItem = document.createElement('li')
    listItem.innerHTML = `<span>${taskText}</span>`
    listItem.classList.add('task-item')

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add('delete-btn')

    deleteBtn.addEventListener('click', () => {
        listItem.remove()
    })

    listItem.appendChild(deleteBtn)

    tasksList.appendChild(listItem)
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const taskText = taskInput.value.trim()

    if (taskText !== '') {
        renderTasks(taskText)
    }

    taskInput.value = ''
})
