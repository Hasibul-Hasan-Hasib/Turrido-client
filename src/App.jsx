import "./App.css"
import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/store"
import Home from "./pages/home/Home"
import Layout from "./shared/layout/Layout"
import Contact from "./shared/contact/Contact"
import Team from "./shared/team/Team"
import Login from "./pages/login/Login"
import Register from "./pages/Register/Register"
import AuthProvider from "./context/AuthProvider"
import NotFound from "./pages/notFound/NotFound"
import Blogs from "./pages/blogs/Blogs"
import Tours from "./pages/Tours/Tours"
import TourDetails from "./pages/Tours/TourDetails"
import AdminLogin from "./pages/admin/AdminLogin"
import Posts from "./pages/admin/Posts"
import PrivateOutlet from "./shared/PrivateOutlet/PrivateOutlet"
import Booking from "./pages/Tours/Booking"
import Users from "./pages/admin/Users"

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "blogs",
                    element: <Blogs />,
                },
                {
                    path: "tours",
                    element: <Tours />,
                },
                {
                    path: "tours/:id",
                    element: <TourDetails />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
                {
                    element: <PrivateOutlet />,
                    children: [
                        {
                            path: "/bookings",
                            element: <Booking />,
                        },
                        // {
                        //     path: "/posts",
                        //     element: <Posts />,
                        // },
                        // {
                        //     path: "/add-posts",
                        //     element: <AddPost />,
                        // },
                        // {
                        //     path: "/saved",
                        //     element: <Saved />,
                        // },
                    ],
                },
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "register",
                    element: <Register />,
                },
            ],
        },
        {
            path: "/admin-login",
            element: <AdminLogin />,
        },
        {
            element: <PrivateOutlet type="admin" />,
            children: [
                {
                    path: "/admin",
                    element: <Layout />,
                    children:[
                        {
                            path: "posts",
                            element: <>this is posts</>,
                        },
                        {
                            path: "users",
                            element: <Users></Users>,
                        },
                        {
                            path: "bookings",
                            element: <>this is booking</>,
                        },
                    ]
                },
            ],
        },
        { path: "*", element: <NotFound /> },
    ])

    return (
        <React.StrictMode>
            <Provider store={store}>
                <AuthProvider>
                    <RouterProvider router={router}></RouterProvider>
                </AuthProvider>
            </Provider>
        </React.StrictMode>
    )
}

export default App
