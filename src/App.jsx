import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './shared/layout/Layout';
import Contact from './shared/contact/Contact';
import Team from './shared/team/Team';
import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './context/AuthProvider';
import NotFound from './pages/notFound/NotFound';
import Blogs from './pages/blogs/Blogs';
import Tours from './pages/Tours/Tours';
import TourDetails from './pages/Tours/TourDetails';
import AdminLogin from './pages/admin/AdminLogin';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/blogs',
          element: <Blogs />
        },
        {
          path: '/team',
          element: <Team />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path:'/admin-login',
          element: <AdminLogin/>
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: 'tours',
          element: <Tours />,
        },
        {
          path: 'tours/:id',
          element: <TourDetails />
        },
      ]
    },
    { path: '*', element: <NotFound /> }
  ])

  return (
    <div data-theme="night" >
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </div>
  )
}


export default App
