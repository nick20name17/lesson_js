import { useState } from 'react'

export const Form = () => {
    const [name, setName] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        setError('')

        if (!name) {
            setError('Please enter your name')
            return
        }

        alert(`Hello ${name}!`)
        setName('')
    }

    return (
        <form
            className="p-10 space-x-2"
            onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
                <input
                    className="border-2 border-black rounded-md p-2"
                    type="text"
                    placeholder="Enter your name"
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                    value={name}
                />
                {error ? <span className="text-red-500">{error}</span> : null}
            </div>
            <button
                className="bg-blue-500 rounded-md p-2 text-white cursor-pointer"
                type="submit">
                Submit
            </button>
        </form>
    )
}
