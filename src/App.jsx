import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './shared/layout/Layout';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />
        }
      ]
    }
  ])

  return (
    <div className='bg-main'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}


export default App
