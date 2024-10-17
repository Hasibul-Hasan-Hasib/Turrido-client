import { Link, useNavigate } from 'react-router-dom';
import { Container } from '@mantine/core';
import useAuth from '../../hooks/useAuth';


const NavBar = () => {

    const { logOut, setUser, user, setIsLoading } = useAuth();

    const navigate = useNavigate()
    const handleLogout = () => {
        logOut()
            .then(() => {
                setUser({})
                setIsLoading(true)
                navigate('/')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }





    return (
        <header className='border-b-2 border-slate-800 sticky top-0 z-10 bg-base-100' >
            <div className='container px-5 mx-auto' >
                <div className="navbar px-0">
                    <div className="navbar-start">
                        <Link to='/' className="btn btn-ghost normal-case text-2xl px-0 hover:bg-transparent">Turrido</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to='/'>Home</Link></li>
                            <li>
                                <Link to='/tours'>Tours</Link>
                            </li>
                            <li>
                                <Link to='/blogs'>Blog</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li>
                                <Link to='/team'>Team</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user.email ?
                                <div className="dropdown dropdown-bottom dropdown-end">
                                    <div className='tooltip tooltip-left' data-tip={user.email}>
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>
                                        </label>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><Link to='/'>Home</Link></li>
                                        <li>
                                            <Link to='/tours'>Tours</Link>
                                        </li>
                                        <li>
                                            <Link to='/blogs'>Blog</Link>
                                        </li>
                                        <li>
                                            <Link to='/contact'>Contact</Link>
                                        </li>
                                        <li>
                                            <Link to='/team'>Team</Link>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><a onClick={handleLogout}>Logout</a></li>
                                    </ul>
                                </div>
                                :
                                <>
                                    <Link to='/login' className='btn btn-primary text-white hidden lg:flex'>Log in</Link>
                                    <div className="dropdown dropdown-bottom dropdown-end lg:hidden">
                                        <label tabIndex={0} className="btn btn-ghost px-0 lg:px-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                        </label>

                                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                            <li><Link to='/'>Home</Link></li>
                                            <li>
                                                <Link to='/tours'>Tours</Link>
                                            </li>
                                            <li>
                                                <Link to='/blogs'>Blog</Link>
                                            </li>
                                            <li>
                                                <Link to='/contact'>Contact</Link>
                                            </li>
                                            <li>
                                                <Link to='/team'>Team</Link>
                                            </li>
                                            <li>
                                                <Link Link to='/login' className='btn-primary font-bold text-sky-900'>Log in</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        </header >
    )
};

export default NavBar;