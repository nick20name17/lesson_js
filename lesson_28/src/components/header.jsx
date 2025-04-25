import { NavLink } from 'react-router'
import { useUserName } from '../context/user-name-context'

export const Header = () => {
    const { userName } = useUserName()

    return (
        <header className="h-20 bg-blue-500 text-white flex items-center justify-between gap-10 px-20">
            <nav>
                <ul className="flex items-center gap-10 h-full">
                    <li className="hover:scale-105 transition-all ">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-yellow-500' : ''
                            }
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="hover:scale-105 transition-all">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-yellow-500' : ''
                            }
                            to="/about">
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-2">
                <div className="text-white">{userName}</div>
                <div className="size-10 font-bold rounded-full flex items-center justify-center bg-white text-blue-600">
                    {userName[0]?.toUpperCase()}
                </div>
            </div>
        </header>
    )
}
