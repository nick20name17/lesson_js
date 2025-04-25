import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <section className="h-screen flex items-center justify-center flex-col gap-10">
            <h1 className="text-9xl text-center text-blue-500 font-bold">404</h1>
            <Link
                className="text-center text-xl"
                to="/">
                Go to Home
            </Link>
        </section>
    )
}
