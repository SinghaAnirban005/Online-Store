import React, { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


function App() {
  // const [count, setCount] = useState(0)
  const active = useSelector((state) => state.userStatus)

  return (
    <div>
    <Header />

    <Outlet />

    <Footer />
    </div>
  )

}

export default App
