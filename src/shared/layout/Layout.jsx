import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import NavBar from '../navBar/Navbar'


const Layout = () => {

    return (
        <div>
            <NavBar></NavBar>
            <Outlet/>
            <Footer></Footer>
        </div>
    )
}

export default Layout