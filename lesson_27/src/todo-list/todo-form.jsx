import { useState } from 'react'

export const TodoForm = ({ addTask }) => {
    const [error, setError] = useState('')
    const [task, setTask] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        setError('')

        if (!task) {
            setError('Please enter your task')
            return
        }

        addTask(task)
        setTask('')
    }

    return (
        <form
            className="p-10 space-x-2 flex items-start justify-center"
            onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
                <input
                    className="border-2 border-black rounded-md p-2"
                    type="text"
                    placeholder="Enter your task"
                    onChange={(event) => {
                        setTask(event.target.value)
                    }}
                    value={task}
                />
                {error ? <span className="text-red-500">{error}</span> : null}
            </div>
            <button
                className="bg-blue-500 flex-1 rounded-md p-2 text-white cursor-pointer"
                type="submit">
                Submit
            </button>
        </form>
    )
}
