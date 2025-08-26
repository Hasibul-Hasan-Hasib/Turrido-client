import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import NavBar from '../navbar/NavBar'


const Layout = () => {

    return (
        <div className='flex flex-col min-h-screen'>
            <NavBar></NavBar>
            <Outlet />
            <Footer></Footer>
        </div>
    )
}

export default Layout