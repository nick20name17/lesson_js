import { useState } from 'react'

export const useTasks = () => {
    const [tasks, setTasks] = useState([])

    const addTask = (name) => {
        const newTask = {
            id: Math.floor(Math.random() * 1000),
            name,
            completed: false,
        }

        setTasks([newTask, ...tasks])
    }

    const toggleCompleted = (id) => {
        const newTasks = tasks.map((task) => {
            if (task.id === id) {
                return {
                    id: task.id,
                    name: task.name,
                    completed: !task.completed,
                }
            } else {
                return task
            }
        })

        setTasks(newTasks)
    }

    const removeTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id)

        setTasks(newTasks)
    }

    return {
        tasks,
        addTask,
        toggleCompleted,
        removeTask,
    }
}
