import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import { Signup } from '../pages/Signup'
import { Panel } from '../pages/Panel'


const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>
    },
    {
        path: '/registro',
        element: <Signup/>
    },
    {
      path: '/painel',
      element: <Panel/>
    },
    {
      path: '*',
      element: <div>Not Found</div>
    }
])

export const Routes: React.FC = () => (<RouterProvider router={router} />)