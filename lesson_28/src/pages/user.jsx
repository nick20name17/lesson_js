import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
    const { id } = useParams()

    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/users/${id}`)
            .then((res) => res.json())
            .then((data) => setUser(data))
    }, [id])

    if (user === null)
        return (
            <div className="h-screen flex items-center flex-col justify-center">
                Loading...
            </div>
        )

    return (
        <div className="h-screen flex items-center flex-col justify-center">
            <div className="rounded-2xl p-5 border w-80 flex flex-col gap-4">
                <img
                    className="size-24 rounded-full"
                    src={user.avatar}
                    alt="user"
                />
                <h1 className="text-xl font-bold">{user.name}</h1>
                <div className="">{user.email}</div>
            </div>
        </div>
    )
}
