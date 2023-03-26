import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './shared/layout/Layout';
import Contact from './shared/Contact/Contact';
import Team from './shared/team/Team';
import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './context/AuthProvider';


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
          path: '/register',
          element: <Register />
        }
      ]
    }
  ])

  return (
    <div data-theme="mytheme" >
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </div>
  )
}


export default App
