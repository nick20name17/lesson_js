import { useState } from 'react'

export const ProfileForm = ({ setUserName, userName }) => {
    const [name, setName] = useState(userName)

    const onSubmit = (e) => {
        e.preventDefault()

        setUserName(name)
    }

    return (
        <form
            className="flex items-end gap-1"
            onSubmit={onSubmit}>
            <div className="flex flex-col gap-1">
                <label
                    className="text-sm text-gray-500"
                    htmlFor="name">
                    Name
                </label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border rounded-md px-2 py-1 w-40"
                    id="name"
                    placeholder="John Doe"
                    type="text"
                />
            </div>
            <button
                className="px-2 py-1 w-20 bg-blue-600 text-white flex rounded-md cursor-pointer items-center justify-center"
                type="submit">
                Edit
            </button>
        </form>
    )
}
