const form = document.querySelector('.form')
const taskInput = document.querySelector('#task')
const tasksList = document.querySelector('.tast-list')

const filterButtons = document.querySelectorAll('.filter-btn')

let tasks = []
let filter = 'all'

filterButtons.forEach((filterButton) => {
    filterButton.addEventListener('click', () => {
        filterButtons.forEach((filterButton) => {
            filterButton.classList.remove('active')
        })
        filterButton.classList.add('active')

        filter = filterButton.id
    })
})

function showEmptyMessage(show) {
    if (show) {
        const emptyMessage = document.createElement('li')
        emptyMessage.classList.add('empty-message')
        emptyMessage.textContent = 'No tasks added'
        tasksList.appendChild(emptyMessage)
    }
}

function renderTasks() {
    tasksList.innerHTML = ''

    showEmptyMessage(tasks.length === 0)

    const filteredTasks = tasks.filter((task) => task.completed === false)

    filteredTasks.forEach((task) => {
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = task.completed
        checkbox.addEventListener('change', () => {
            toggleCompleted(task.id)
        })

        const listItem = document.createElement('li')
        listItem.innerHTML = `<span>${task.text}</span>`
        listItem.classList.add('task-item')

        if (task.completed) {
            listItem.classList.add('completed')
        }

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.classList.add('delete-btn')

        deleteBtn.addEventListener('click', () => {
            deleteTask(task.id)
        })

        listItem.appendChild(deleteBtn)
        listItem.insertAdjacentElement('afterbegin', checkbox)

        tasksList.appendChild(listItem)
    })
}

renderTasks()

function addTask(text) {
    const newTask = {
        id: tasks.length + 1,
        text,
        completed: false,
    }

    tasks.push(newTask)

    renderTasks()
}

function deleteTask(taskId) {
    tasks = tasks.filter((task) => task.id !== taskId)
    renderTasks()
}

function toggleCompleted(taskId) {
    const task = tasks.find((task) => {
        return task.id === taskId
    })

    if (task) {
        // if (task.completed) {
        //     task.completed = false
        // } else {
        //     task.completed = true
        // }

        task.completed = !task.completed

        renderTasks()
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const taskText = taskInput.value.trim()

    if (taskText !== '') {
        addTask(taskText)
    }

    taskInput.value = ''
})
