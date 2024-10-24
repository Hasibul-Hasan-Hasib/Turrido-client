import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import ThemeChanger from "./ThemeChanger"

const NavBar = () => {
    const { logOut, setUser, user, setIsLoading } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logOut()
            .then(() => {
                setUser({})
                setIsLoading(true)
                navigate("/")
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <header className="sticky top-0 z-10 border-b-2 border-slate-800 bg-base-100 px-5">
            <div className="container mx-auto">
                <div className="navbar px-0">
                    <div className="navbar-start">
                        <Link
                            to="/"
                            className="btn-ghost btn px-0 text-2xl normal-case hover:bg-transparent"
                        >
                            Turrido
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/tours">Tours</Link>
                            </li>
                            <li>
                                <Link to="/blogs">Blog</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/team">Team</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user.email ? (
                            <>
                                <div className="hidden md:block">
                                    <ThemeChanger />
                                </div>
                                <div className="dropdown-bottom dropdown-end dropdown">
                                    <div
                                        className="tooltip tooltip-left"
                                        data-tip={user.email}
                                    >
                                        <label
                                            tabIndex={0}
                                            className="btn-ghost btn-circle avatar btn"
                                        >
                                            <div className="w-10 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>
                                        </label>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
                                    >
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">
                                                    New
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/tours">Tours</Link>
                                        </li>
                                        <li>
                                            <Link to="/blogs">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                        <li>
                                            <Link to="/team">Team</Link>
                                        </li>
                                        <li>
                                            <a>Settings</a>
                                        </li>
                                        <li className="md:hidden">
                                            <ThemeChanger />
                                        </li>
                                        <li>
                                            <a onClick={handleLogout}>Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="hidden md:block">
                                    <ThemeChanger />
                                </div>
                                <Link
                                    to="/login"
                                    className="btn-primary btn hidden text-white lg:flex"
                                >
                                    Log in
                                </Link>
                                <div className="dropdown-bottom dropdown-end dropdown lg:hidden">
                                    <label
                                        tabIndex={0}
                                        className="btn-ghost btn px-0 lg:px-4"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h8m-8 6h16"
                                            />
                                        </svg>
                                    </label>

                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
                                    >
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/tours">Tours</Link>
                                        </li>
                                        <li>
                                            <Link to="/blogs">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                        <li>
                                            <Link to="/team">Team</Link>
                                        </li>
                                        <li className="md:hidden">
                                            <ThemeChanger />
                                        </li>
                                        <li>
                                            <Link
                                                Link
                                                to="/login"
                                                className="btn-primary font-bold text-sky-900"
                                            >
                                                Log in
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar
