import { Link } from 'react-router'

export const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/about">About</Link>
        </div>
    )
}
