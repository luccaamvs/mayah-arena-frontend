import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Routes } from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes/>
    <ToastContainer/>
  </React.StrictMode>,
)
