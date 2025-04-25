import { createBrowserRouter, RouterProvider } from 'react-router'
import { Layout } from './components/layout'
import { About } from './pages/about'
import { Home } from './pages/home'
import { NotFound } from './pages/not-found'
import { User } from './pages/user'
import { Users } from './pages/users'

export const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                ,
                {
                    path: '/about',
                    element: <About />,
                },
                {
                    path: '/users',
                    element: <Users />,
                },
                {
                    path: '/users/:id',
                    element: <User />,
                },
            ],
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ])

    return <RouterProvider router={router} />
}
