import { NavLink } from 'react-router'

export const Header = () => {
    return (
        <header className="h-20 bg-blue-500 text-white flex items-center px-20">
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
        </header>
    )
}
