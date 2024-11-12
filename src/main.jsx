import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './Component/Dashboard.jsx'
import Layout from './Component/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout></Layout>}></Route>
    <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
   </Routes>
    <App />
   </BrowserRouter>
   </StrictMode>,
)
