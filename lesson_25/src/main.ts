import { Filters, Task } from './types/task'

const form = document.querySelector('.form') as HTMLFormElement
const taskInput = document.querySelector('#task') as HTMLInputElement
const tasksList = document.querySelector('.task-list')!
const filterButtons = document.querySelectorAll(
    '.filter-btn'
) as NodeListOf<HTMLButtonElement>

let tasks: Task[] = []
let filter: Filters = 'all'

function getFilteredTasks() {
    if (filter === 'completed') {
        return tasks.filter((task) => task.completed)
    } else if (filter === 'not-completed') {
        return tasks.filter((task) => !task.completed)
    } else {
        return tasks
    }
}

function loadTasks() {
    const storageTasks = localStorage.getItem('tasks')

    console.log(storageTasks)

    if (storageTasks) {
        tasks = JSON.parse(storageTasks)
    }
}

function saveTasks() {
    const stringifiedTasks = JSON.stringify(tasks)
    localStorage.setItem('tasks', stringifiedTasks)
}

function showEmptyMessage(show: boolean) {
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

    tasks.forEach((task) => {
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

function addTask(text: string) {
    const newTask: Task = {
        id: Math.floor(Math.random() * 1000),
        completed: false,
        text,
    }

    tasks.push(newTask)

    saveTasks()
    renderTasks()
}

function deleteTask(taskId: number) {
    tasks = tasks.filter((task) => task.id !== taskId)
    saveTasks()
    renderTasks()
}

function toggleCompleted(taskId: number) {
    const task = tasks.find((task) => {
        return task.id === taskId
    })

    if (task) {
        task.completed = !task.completed

        renderTasks()
        saveTasks()
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
loadTasks()
