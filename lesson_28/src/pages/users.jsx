import { useEffect, useState } from 'react'
import { Link } from 'react-router'

export const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
    }, [])

    if (users.length === 0) {
        return (
            <div className="h-screen flex items-center flex-col justify-center">
                Loading...
            </div>
        )
    }

    return (
        <div className="h-screen flex items-center flex-col justify-center">
            <ul className="grid grid-cols-6 gap-7">
                {users.map((user) => (
                    <li>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
